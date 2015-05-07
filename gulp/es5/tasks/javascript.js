'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _babelify = require('babelify');

var _babelify2 = _interopRequireWildcard(_babelify);

var _preprocess = require('gulp-preprocess');

var _preprocess2 = _interopRequireWildcard(_preprocess);

// sort this out

var _watchify = require('watchify');

var _watchify2 = _interopRequireWildcard(_watchify);

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

exports['default'] = { dev: dev, production: production };

function dev() {
  return browserify({ entries: './src/index.js', debug: true }).transform(_babelify2['default']).bundle().pipe(source('bundle.js')).pipe(buffer()).pipe(sourcemaps.init({ loadMaps: true }))
  // transform tasks follow
  .pipe(_preprocess2['default']()).pipe(sourcemaps.write('./')).pipe(gulp.dest('dev-build')).pipe(livereload());
}

function production() {
  return browserify({ entries: './src/index.js' }).transform(_babelify2['default']).bundle().pipe(source('bundle.js')).pipe(buffer())
  // transform tasks follow
  .pipe(_preprocess2['default']()).pipe(uglify()).pipe(gulp.dest('build'));
}
module.exports = exports['default'];
//# sourceMappingURL=javascript.js.map