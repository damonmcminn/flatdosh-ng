export default function(login, register) {

  let vm = this;

  vm.selectLogin = true;

  let actions = {

    login () {
      login.do(vm.user).error(failure => {

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
      register.do(vm.user)
        .success(() => {
          actions.login();
        })
        .error(err => console.log(err));
    }
  };

  vm.select = function(type) {
    vm.action = type;
  };

  vm.submit = function() {
    actions[vm.action]();
  };

}
