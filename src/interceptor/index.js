export default function(ls) {

  return {

    request (config) {

      // don't attach token to login request
      let login = /\/login$/.test(config.url);
      let api = /\/api/.test(config.url);

      if (api && !login) {
        config.headers.authorization = `Bearer ${ls.get('token')}`;
      }

      return config;

    }

  };

}
