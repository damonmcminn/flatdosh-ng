export default function(auth, $state) {

  let vm = this;

  if (auth.loggedIn()) {
    return $state.go('main.balances');
  }

  vm.selectLogin = true;

  let actions = {

    login () {
      auth.login(vm.user)
      .error(failure => {

        let message;
        if (!failure || !failure.message) {
          message = 'Server error';
        } else {
          message = failure.message;
        }

        vm.error = message;

        switch (message) {
          case 'Bad password':
            vm.user.password = null;
            break;
          case 'User not found':
            vm.user = null;
            break;
        }
      });

    },
    register () {
      auth.register(vm.user)
        .success(() => {
          actions.login();
        })
        .error(err => vm.error = err.message);
    }
  };

  vm.select = function(type) {
    vm.action = type;
  };

  vm.submit = function() {
    actions[vm.action]();
  };

}
