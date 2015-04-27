var gulp = require('gulp');
var livereload = require('gulp-livereload');
var jade = require('gulp-jade');

import preprocess from 'gulp-preprocess';

module.exports = function() {
  return gulp.src('src/index.jade')
    .pipe(jade({pretty: true}))
    .pipe(preprocess())
    .pipe(gulp.dest('build'))
    .pipe(livereload());
}
