var gulp = require('gulp');
var livereload = require('gulp-livereload');
var jade = require('gulp-jade');

module.exports = function() {
  return gulp.src('src/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('build'))
    .pipe(livereload());
}
