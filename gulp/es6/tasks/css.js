var gulp = require('gulp');
var livereload = require('gulp-livereload');
var minifyCSS = require('gulp-minify-css');

export default {dev, production}

function dev() {
  return gulp.src('src/*.css')
    .pipe(gulp.dest('dev-build'))
    .pipe(livereload());
}

function production() {
  return gulp.src('src/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build'));
}
