import API from './API';
import auth from './auth';
import balance from './balance';
import expense from './expense';
import {money} from './filters';
import login from './login';
import ls from './ls';
import main from './main';
import pubsub from './pubsub';
import register from './register';
import user from './user';

angular.module('flatdosh', ['templates'])
  // FACTORIES
  .factory('API', ['$http', '$window', API])
  .factory('auth', ['ls', auth])
  .factory('balance', ['API', balance.factory])
  .factory('expense', ['API', 'pubsub', expense.factory])
  .factory('login', ['API', 'ls', 'pubsub', login.factory])
  .factory('ls', [ls])
  .factory('pubsub', [pubsub])
  .factory('register', ['API', register.factory])
  .factory('user', [user.factory])
  // CONTROLLERS
  .controller('balanceCtrl', ['balance', 'pubsub', balance.ctrl])
  .controller('expenseCtrl', ['expense', 'pubsub', expense.ctrl])
  .controller('loginCtrl', ['login', login.ctrl])
  .controller('mainCtrl', ['ls', 'pubsub', main])
  .controller('registerCtrl', ['register', register.ctrl])
  .controller('userCtrl', ['user', user.ctrl])
  //CONFIG
  .config(['$httpProvider', hp => {
    ['auth'].forEach(interceptor => hp.interceptors.push(interceptor));
  }])
  .filter('money', money);
