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
var taskMethods = require('gulpfile-ninecms');

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
