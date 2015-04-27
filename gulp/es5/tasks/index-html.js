'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _preprocess = require('gulp-preprocess');

var _preprocess2 = _interopRequireWildcard(_preprocess);

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var jade = require('gulp-jade');

module.exports = function () {
  return gulp.src('src/index.jade').pipe(jade({ pretty: true })).pipe(_preprocess2['default']()).pipe(gulp.dest('build')).pipe(livereload());
};
//# sourceMappingURL=index-html.js.map