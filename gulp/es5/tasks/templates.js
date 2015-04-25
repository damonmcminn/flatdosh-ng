'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _templateCache = require('gulp-angular-templatecache');

var _templateCache2 = _interopRequireWildcard(_templateCache);

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var jade = require('gulp-jade');

exports['default'] = function () {
  return gulp.src('src/**/*.jade').pipe(jade()).pipe(_templateCache2['default']({ standalone: true })).pipe(gulp.dest('build')).pipe(livereload());
};

module.exports = exports['default'];
//# sourceMappingURL=templates.js.map