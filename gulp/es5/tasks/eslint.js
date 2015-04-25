'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _gulp = require('gulp');

var _gulp2 = _interopRequireWildcard(_gulp);

var _lint = require('gulp-eslint');

var _lint2 = _interopRequireWildcard(_lint);

exports['default'] = function () {
  return _gulp2['default'].src(['src/index.js', 'src/**/*.js']).pipe(_lint2['default']({
    envs: ['es6', 'browser'],
    globals: {
      angular: true
    },
    rules: {
      quotes: [1, 'single']
    },
    ecmaFeatures: {
      modules: true
    }
  })).pipe(_lint2['default'].format()).pipe(_lint2['default'].failOnError());
};

module.exports = exports['default'];
//# sourceMappingURL=eslint.js.map