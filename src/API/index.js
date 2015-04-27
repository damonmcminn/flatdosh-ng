export default function($http, $window) {

  /*
  let dev = /\w+$/i.exec($location.host).pop() === 'dev';
  let API = dev ? $location.host :
  */

  let API = 'https://api.damonmcminn.com/flatdosh/';

  /* @if NODE_ENV=='dev' */
    API = 'http://api.dev/flatdosh/';
  /* @endif */

  return {

    balance () {

      return $http.get(API + 'balance').success(res => res.data);

    },

    expense: {

      save (data) {

        // add extra info to data

        return $http({
          method: 'post',
          url: `${API}expense`,
          data
        });

      },

      all () {

        return $http.get(`${API}expense`);

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

    }

  };

}
