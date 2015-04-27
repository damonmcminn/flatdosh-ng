export default function(loginFactory) {

  let vm = this;
  let login = loginFactory;

  vm.login = function() {
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
  }

}
