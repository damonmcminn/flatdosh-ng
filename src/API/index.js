export default function($http, $window, group) {

  let API = 'https://flatdosh.com/api/';

  /* @if NODE_ENV=='dev' */
    API = 'http://api.dev/flatdosh/';
  /* @endif */

  return {

    balance () {

      return $http.get(`${API}balance/${group.id}`).success(res => res.data);

    },

    expense: {

      save (data) {

        return $http({
          method: 'post',
          url: `${API}expense`,
          data
        });

      },

      all () {

        return $http.get(`${API}expense/${group.id}`);

      },

      destroy (expenses) {

        console.log(expenses);

        return $http({

          method: 'delete',
          url: API + 'expense',
          data: expenses

        });

      }

    },

    login (user) {

      let {email, password} = user;

      let authorization = 'Basic ' + $window.btoa(`${email}:${password}`);

      return $http({
        method: 'post',
        url: `${API}login`,
        headers: {authorization}
      });

    },

    register (user) {

      return $http({
        method: 'post',
        url: API + 'register',
        data: user
      });
    },

    settings () {
      return $http.get(API + 'settings');
    },

    members () {
      return $http.get(`${API}members/${group.id}`);
    }

  };

}
