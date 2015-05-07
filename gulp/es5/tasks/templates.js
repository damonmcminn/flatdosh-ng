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

exports['default'] = { dev: dev, production: production };

function dev() {
  return gulp.src('src/**/*.jade').pipe(jade()).pipe(_templateCache2['default']({ standalone: true })).pipe(gulp.dest('dev-build')).pipe(livereload());
}

function production() {
  return gulp.src('src/**/*.jade').pipe(jade()).pipe(_templateCache2['default']({ standalone: true })).pipe(gulp.dest('build'));
}
module.exports = exports['default'];
//# sourceMappingURL=templates.js.map