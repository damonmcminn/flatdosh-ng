'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _preprocess = require('gulp-preprocess');

var _preprocess2 = _interopRequireWildcard(_preprocess);

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var jade = require('gulp-jade');

exports['default'] = { dev: dev, production: production };

function dev() {
  return gulp.src('src/index.jade').pipe(jade({ pretty: true })).pipe(_preprocess2['default']()).pipe(gulp.dest('dev-build')).pipe(livereload());
}

function production() {
  return gulp.src('src/index.jade').pipe(jade()).pipe(_preprocess2['default']()).pipe(gulp.dest('build'));
}
module.exports = exports['default'];
//# sourceMappingURL=index-html.js.map