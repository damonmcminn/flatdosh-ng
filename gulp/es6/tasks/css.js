var gulp = require('gulp');
var livereload = require('gulp-livereload');
var minifyCSS = require('gulp-minify-css');

export default function() {
  return gulp.src('src/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build'))
    .pipe(livereload());
}
