export default function(ls, API, $state, group) {

  let loggedIn = !!ls.get('token');

  return {

    loggedIn () {
      return loggedIn;
    },

    login (user) {
      return API.login(user)
        .success(res => {
          ls.set('token', res.token);
          ls.set('user', res.data);

          // set group as first group (only one at moment)
          let {id, name} = res.data.groups.shift();
          group.id = id;
          group.name = name;

          loggedIn = true;

          $state.go('main.balances');

        });
    },

    logout () {
      // drop user and group also?
      ls.drop('token');
      loggedIn = false;
    },

    register (user) {
      return API.register(user);
    }

  };

}
