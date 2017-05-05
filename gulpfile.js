/**
 * Gulp configuration
 * Adapted from gulpfile-ninecms
 *
 * gulp (watch) : for development
 * gulp build : for a one off development build
 */

var paths = {
  sass: [
    'src/email.sass'
  ],
  build: 'build/',
  inlineCss: {
    html: 'src/email.html',
    build: 'build/'
  }
};

var gulp = require('gulp');
var gutil = require('gulp-util');
var argv = require('yargs').argv;
var del = require('del');
var notify = require('gulp-notify');
var gulpif = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var inlineCss = require('gulp-inline-css');

var production = !!argv.production;
var config = {
  autoprefixer_versions: ['last 2 version', 'safari 5', 'ie 8', 'ie 9']
};

var handleError = function (task) {
  return function (err) {
    notify.onError({
      message: task + ' failed, check the logs',
      sound: false
    })(err);
    gutil.log(gutil.colors.bgRed(task + ' error:'), gutil.colors.red(err));
  };
};

var taskMethods = {
  /*
   * Delete build folder
   */
  clean: function (paths) {
    return del([paths.build]);
  },

  /*
   * SASS
   */
  sass: function (paths) {
    return gulp.src(paths.sass)
    // sourcemaps + sass + error handling
      .pipe(gulpif(!production, sourcemaps.init()))
      .pipe(sass({
        sourceComments: !production,
        outputStyle: production ? 'compressed' : 'nested'
      }))
      .on('error', handleError('SASS'))
      // generate .maps
      .pipe(gulpif(!production, sourcemaps.write({
        'includeContent': false,
        'sourceRoot': '.'
      })))
      .pipe(gulpif(!production, sourcemaps.init({'loadMaps': true})))
      .pipe(gulpif(production, autoprefixer(config.autoprefixer_versions)))
      // we don't serve the source files so include scss content inside the sourcemaps
      .pipe(sourcemaps.write({'includeContent': true}))
      .pipe(gulp.dest(paths.build + 'css/'));
  },

  /*
   * inline css into html, suitable for emails
   */
  inlineCss: function (paths) {
    return gulp.src(paths.inlineCss.html)
      .on('error', handleError('inlineCss'))
      .pipe(inlineCss({
        preserveMediaQueries: true,
        applyTableAttributes: true
      }))
      .pipe(gulp.dest(paths.inlineCss.build))
  }
};

var tasks = {
  clean: function () { return taskMethods.clean(paths); },
  sass: function () { return taskMethods.sass(paths); },
  inlineCss: function () { return taskMethods.inlineCss(paths); }
};

gulp.task('clean', tasks.clean);
// for production we require the clean method on every individual task
var build = argv._.length ? argv._[0] === 'build' : false;
var req = build ? ['clean'] : [];
// individual tasks
gulp.task('sass', req, tasks.sass);
gulp.task('inlineCss', req.concat(['sass']), tasks.inlineCss);

// build task
gulp.task('build', [
  'sass',
  'inlineCss'
]);

// watch task
gulp.task('watch', ['build'], function () {
  gulp.watch(paths.sass, ['css', 'inlineCss']);
  gulp.watch(paths.inlineCss.html, ['inlineCss']);
  gutil.log(gutil.colors.bgGreen('Watching for changes...'));
});

gulp.task('default', ['watch']);
