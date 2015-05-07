var gulp = require('gulp');
var livereload = require('gulp-livereload');
var jade = require('gulp-jade');

import preprocess from 'gulp-preprocess';

export default {dev, production};

function dev() {
  return gulp.src('src/index.jade')
    .pipe(jade({pretty: true}))
    .pipe(preprocess())
    .pipe(gulp.dest('dev-build'))
    .pipe(livereload());
}

function production() {
  return gulp.src('src/index.jade')
    .pipe(jade())
    .pipe(preprocess())
    .pipe(gulp.dest('build'))
}
