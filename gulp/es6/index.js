import {install} from 'source-map-support';
install();

import gulp from 'gulp';
import connect from 'gulp-connect';
import livereload from 'gulp-livereload';

// tasks
import html from './tasks/index-html';
import js from './tasks/javascript';
import templates from './tasks/templates';
import css from './tasks/css';
import lint from './tasks/eslint';
//import test from './tasks/test';

gulp.task('server', () => {
  connect.server({
    root: 'dev-build',
    port: 30000,
    livereload: true,
    fallback: 'build/index.html'
  });
});

gulp.task('html', html.dev);
gulp.task('js', js.dev);
gulp.task('css', css.dev);
gulp.task('templates', templates.dev);
gulp.task('lint', lint);
//gulp.task('test', test);

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/index.jade', ['html']);
  gulp.watch(['src/**/*.jade'], ['templates']);
  gulp.watch(['src/*.css'], ['css']).on('changed', livereload.changed);
  gulp.watch(['src/**/*.js', 'src/*.js'], ['lint', 'js']);
});

gulp.task('compile', () => {

  process.env.NODE_ENV = 'production';

  html.production();
  css.production();
  templates.production();
  js.production();

});

export default gulp.task('default',[
  'server', 'js', 'html', 'css', 'templates', 'lint', 'watch'
]);
