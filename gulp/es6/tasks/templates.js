var gulp = require('gulp');
var livereload = require('gulp-livereload');
var jade = require('gulp-jade');

import templateCache from 'gulp-angular-templatecache';

export default {dev, production};

function dev() {
  return gulp.src('src/**/*.jade')
    .pipe(jade())
    .pipe(templateCache({standalone: true}))
    .pipe(gulp.dest('dev-build'))
    .pipe(livereload());
}

function production() {
  return gulp.src('src/**/*.jade')
    .pipe(jade())
    .pipe(templateCache({standalone: true}))
    .pipe(gulp.dest('build'))
}
