var gulp = require('gulp');
var livereload = require('gulp-livereload');
var jade = require('gulp-jade');

import templateCache from 'gulp-angular-templatecache';

export default function() {
  return gulp.src('src/**/*.jade')
    .pipe(jade())
    .pipe(templateCache({standalone: true}))
    .pipe(gulp.dest('build'))
    .pipe(livereload());
}
