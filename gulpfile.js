'use strict';

var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('minify', function() {
    return gulp.src('./src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'))
})

gulp.task('workflow', function() {
    gulp.src('./src/css/**/*.css')
      .pipe(sourcemaps.init())
      .pipe(autoprefixer({
         browsers: ['last 2 versions'],
         cascade: false
      }))
      .pipe(cssnano())
      .pipe(sourcemaps.write('./'))
      
    .pipe(gulp.dest('./dist/css/'))
});

gulp.task('default', function() {
    gulp.watch('./src/**/*.html', ['minify']);
    gulp.watch('./src/css/**/*.css', ['workflow']);
});