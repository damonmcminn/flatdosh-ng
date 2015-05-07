'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var minifyCSS = require('gulp-minify-css');

exports['default'] = { dev: dev, production: production };

function dev() {
  return gulp.src('src/*.css').pipe(gulp.dest('dev-build')).pipe(livereload());
}

function production() {
  return gulp.src('src/*.css').pipe(minifyCSS()).pipe(gulp.dest('build'));
}
module.exports = exports['default'];
//# sourceMappingURL=css.js.map