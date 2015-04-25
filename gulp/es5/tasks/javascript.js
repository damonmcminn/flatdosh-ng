'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _babelify = require('babelify');

var _babelify2 = _interopRequireWildcard(_babelify);

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

exports['default'] = function () {
  return browserify({ entries: './src/index.js', debug: true }).transform(_babelify2['default']).bundle().pipe(source('bundle.js')).pipe(buffer()).pipe(sourcemaps.init({ loadMaps: true }))
  // transform tasks follow
  .pipe(uglify()).pipe(sourcemaps.write('./')).pipe(gulp.dest('build')).pipe(livereload());
};

module.exports = exports['default'];
//# sourceMappingURL=javascript.js.map