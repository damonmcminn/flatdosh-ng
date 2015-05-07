var gulp = require('gulp');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

import babelify from 'babelify';
import preprocess from 'gulp-preprocess';

// sort this out
import watchify from 'watchify';

export default {dev, production}

function dev() {
  return browserify({entries: './src/index.js', debug: true})
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  // transform tasks follow
  .pipe(preprocess())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('dev-build'))
  .pipe(livereload());
}

function production() {
  return browserify({entries: './src/index.js'})
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  // transform tasks follow
  .pipe(preprocess())
  .pipe(uglify())
  .pipe(gulp.dest('build'))
}
