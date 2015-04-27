'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _install = require('source-map-support');

var _gulp = require('gulp');

var _gulp2 = _interopRequireWildcard(_gulp);

var _connect = require('gulp-connect');

var _connect2 = _interopRequireWildcard(_connect);

var _livereload = require('gulp-livereload');

var _livereload2 = _interopRequireWildcard(_livereload);

// tasks

var _html = require('./tasks/index-html');

var _html2 = _interopRequireWildcard(_html);

var _js = require('./tasks/javascript');

var _js2 = _interopRequireWildcard(_js);

var _templates = require('./tasks/templates');

var _templates2 = _interopRequireWildcard(_templates);

var _css = require('./tasks/css');

var _css2 = _interopRequireWildcard(_css);

var _lint = require('./tasks/eslint');

var _lint2 = _interopRequireWildcard(_lint);

_install.install();

//import test from './tasks/test';

_gulp2['default'].task('server', function () {
  _connect2['default'].server({
    root: 'build',
    port: 30000,
    livereload: true
  });
});

_gulp2['default'].task('html', _html2['default']);
_gulp2['default'].task('js', _js2['default']);
_gulp2['default'].task('css', _css2['default']);
_gulp2['default'].task('templates', _templates2['default']);
_gulp2['default'].task('lint', _lint2['default']);
//gulp.task('test', test);

_gulp2['default'].task('watch', function () {
  _livereload2['default'].listen();
  _gulp2['default'].watch('src/index.jade', ['html']);
  _gulp2['default'].watch(['src/**/*.jade'], ['templates']);
  _gulp2['default'].watch(['src/*.css'], ['css']).on('changed', _livereload2['default'].changed);
  _gulp2['default'].watch(['src/**/*.js', 'src/*.js'], ['lint', 'js']);
});

exports['default'] = _gulp2['default'].task('default', ['server', 'js', 'html', 'css', 'templates', 'lint', 'watch']);
module.exports = exports['default'];
//# sourceMappingURL=index.js.map