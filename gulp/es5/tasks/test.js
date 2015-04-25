'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _karma = require('gulp-karma');

var _karma2 = _interopRequireWildcard(_karma);

var _gulp = require('gulp');

var _gulp2 = _interopRequireWildcard(_gulp);

exports['default'] = function () {
  return _gulp2['default'].src(['src/index.js', 'src/**/*.js']).pipe(_karma2['default']({
    configFile: 'karma.conf.js',
    action: 'watch'
  }));
};

module.exports = exports['default'];
//# sourceMappingURL=test.js.map