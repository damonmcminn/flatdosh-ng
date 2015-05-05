import API from './API';
import auth from './auth';
import balance from './balance';
import expense from './expense';
import {money} from './filters';
import group from './group';
import history from './history';
import login from './login';
import ls from './ls';
import main from './main';
import pubsub from './pubsub';
import register from './register';
import user from './user';

angular.module('flatdosh', ['templates', 'ui.bootstrap'])
  // FACTORIES
  .factory('API', ['$http', '$window', 'group', API])
  .factory('auth', ['ls', auth])
  .factory('balance', ['API', balance.factory])
  .factory('expense', ['API', 'pubsub', expense.factory])
  .factory('group', ['ls', group.factory])
  .factory('login', ['API', 'ls', 'pubsub', 'group', login.factory])
  .factory('ls', [ls])
  .factory('pubsub', [pubsub])
  .factory('register', ['API', register.factory])
  .factory('user', [user.factory])
  // CONTROLLERS
  .controller('balanceCtrl', ['balance', 'pubsub', balance.ctrl])
  .controller('expenseCtrl', ['expense', 'pubsub', 'group', expense.ctrl])
  .controller('loginCtrl', ['login', 'register', login.ctrl])
  .controller('historyCtrl', ['expense', 'pubsub', 'ls', history.ctrl])
  .controller('mainCtrl', ['ls', 'pubsub', 'group', 'API', main])
  .controller('userCtrl', ['user', user.ctrl])
  //CONFIG
  .config(['$httpProvider', hp => {
    ['auth'].forEach(interceptor => hp.interceptors.push(interceptor));
    hp.defaults.headers.delete = {
      'Content-Type': 'application/json'
    }
  }])
  .filter('money', money);
