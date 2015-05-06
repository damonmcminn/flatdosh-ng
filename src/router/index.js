export default function($state, $url, $locationProvider) {

  $locationProvider.html5Mode(true);

  $url.otherwise('/');

  $state
  .state('login', {
    url: '/',
    templateUrl: 'login/index.html'
  })
  .state('main', {
    templateUrl: 'main/index.html'
  })
  .state('main.balances', {
    url: '/balances',
    templateUrl: 'balance/index.html'
  })
  .state('main.save', {
    url: '/expense',
    templateUrl: 'expense/index.html'
  })
  .state('main.history', {
    url: '/expense/history',
    templateUrl: 'history/index.html'
  })
}
