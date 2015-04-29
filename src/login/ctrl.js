export default function(login, register) {

  let vm = this;

  vm.select = function(type) {
    vm.action = type;
  }

  vm.selectLogin = true;

  vm.submit = function() {
    actions[vm.action]();
  }

  let actions = {
    
    login () {
      login.do(vm.user).error(failure => {

        let message = failure.message;

        vm.error = message;

        switch (message) {
          case 'Bad password':
            vm.user.password = null;
            break;
          case 'User not found':
            vm.user = null;
        }
      });

    },
    register () {
      register.do(vm.user)
        .success(r => {
          actions.login();
        })
        .error(err => console.log(err));
    }
  };
}
