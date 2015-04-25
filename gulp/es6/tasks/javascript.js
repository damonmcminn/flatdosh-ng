var gulp = require('gulp');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

import babelify from 'babelify';

export default function() {
  return browserify({entries: './src/index.js', debug: true})
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  // transform tasks follow
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('build'))
  .pipe(livereload());
}
