'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var minifyCSS = require('gulp-minify-css');

exports['default'] = function () {
  return gulp.src('src/*.css').pipe(minifyCSS()).pipe(gulp.dest('build')).pipe(livereload());
};

module.exports = exports['default'];
//# sourceMappingURL=css.js.map