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
    root: 'build',
    port: 30000,
    livereload: true
  });
});

gulp.task('html', html);
gulp.task('js', js);
gulp.task('css', css);
gulp.task('templates', templates);
gulp.task('lint', lint);
//gulp.task('test', test);

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/index.jade', ['html']);
  gulp.watch('src/**/*.jade', ['templates']);
  gulp.watch('src/*.css', ['css']).on('changed', livereload.changed);
  gulp.watch(['src/index.js', 'src/**/*.js'], ['lint', 'js']);
});

export default gulp.task('default',[
  'server', 'js', 'html', 'css', 'templates', 'lint', 'watch'
]);
