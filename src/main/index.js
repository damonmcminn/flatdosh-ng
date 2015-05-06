export default function(auth, $state, group) {

  let vm = this;

  let loggedIn = auth.loggedIn();

  if (!loggedIn) {
    $state.go('login');
  }

  vm.group = group;

  // set initial states
  vm.collapsed = true;

  vm.logout = function() {
    auth.logout();
    $state.go('login');
  };

  vm.toggleCollapsed = function() {
    vm.collapsed = !vm.collapsed;
  };

}
