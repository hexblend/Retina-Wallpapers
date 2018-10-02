'use strict';

// Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

/////////////////
// - SCSS/CSS
////////////////

var SASS_SRC = './src/Assets/sass/**/*.sass';
var SASS_DEST = './src/Assets/css';

// Compile SCSS
gulp.task('compile_sass', function () {

    gulp.src(SASS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SASS_DEST))
    .pipe(gulp.dest(SASS_DEST));

});

// Detect changes in SCSS
gulp.task('watch_sass', function () {
    gulp.watch(SASS_SRC, ['compile_sass']);
});



// Run tasks
gulp.task('default', ['watch_sass']);