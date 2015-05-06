import API from './API';
import auth from './auth';
import balance from './balance';
import expense from './expense';
import {money} from './filters';
import group from './group';
import history from './history';
import interceptor from './interceptor';
import login from './login';
import ls from './ls';
import main from './main';
import router from './router';
import user from './user';

angular.module('flatdosh', ['templates', 'ui.bootstrap', 'ui.router'])
  // FACTORIES
  .factory('API', ['$http', '$window', 'group', API])
  .factory('auth', ['ls', 'API', '$state', auth])
  .factory('balance', ['API', balance.factory])
  .factory('expense', ['API', expense.factory])
  .factory('group', ['ls', group.factory])
  .factory('interceptor', ['ls', interceptor])
  .factory('ls', [ls])
  .factory('user', [user.factory])
  // CONTROLLERS
  .controller('balanceCtrl', ['balance', balance.ctrl])
  .controller('expenseCtrl', ['expense', 'group', 'ls', expense.ctrl])
  .controller('loginCtrl', ['auth', '$state', login])
  .controller('historyCtrl', ['expense', 'ls', history.ctrl])
  .controller('mainCtrl', ['auth', '$state', 'group', main])
  .controller('userCtrl', ['user', user.ctrl])
  //CONFIG
  .config(['$httpProvider', hp => {
    hp.interceptors.push('interceptor');
    //['interceptor'].forEach(interceptor => hp.interceptors.push(interceptor));
    hp.defaults.headers.delete = {
      'Content-Type': 'application/json'
    }
  }])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', router])
  .filter('money', money);
