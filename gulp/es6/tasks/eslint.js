import gulp from 'gulp';
import lint from 'gulp-eslint';

export default function () {
  return gulp.src(['src/index.js', 'src/**/*.js'])
    .pipe(lint({
      envs: ['es6', 'browser'],
      globals: {
        'angular': true
      },
      rules: {
        quotes: [1, 'single']
      },
      ecmaFeatures: {
        modules: true
      }
    }))
    .pipe(lint.format());
}
