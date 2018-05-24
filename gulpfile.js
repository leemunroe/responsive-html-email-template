var gulp = require('gulp'),
    sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    inlinesource = require('gulp-inline-source'),
    inlineCss = require('gulp-inline-css');

gulp.task('default', [ 'inline:css' ]);

// Inline CSS rules in HTML file
gulp.task('inline:css', [ 'inline:sources' ], function() {
    return gulp.src([
        './*.html',
        '!./*-inlined.html'
    ])
        .pipe(inlineCss({ preserveMediaQueries: true }))
        .pipe(rename({
            suffix: "-inlined",
        }))
        .pipe(gulp.dest('./'));
});

// Inline external JavaScript and CSS files
gulp.task('inline:sources', [ 'scss:compile' ], function () {
    return gulp.src('./src/*.html')
        .pipe(inlinesource({
            compress: false
        }))
        .pipe(gulp.dest('./'));
});

// SCSS to CSS compilation
gulp.task('scss:compile', function () {
    return gulp.src("./scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("css/"))
        .pipe(sourcemaps.write("./", {
            addComment: false
        }))
        .pipe(gulp.dest("css/"));
});