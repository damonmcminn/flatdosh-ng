export default function(ls) {

  return {

    request (config) {

      // don't attach token to login request
      let login = /\/login$/.test(config.url);
      if (login) {
        return config;
      }

      // also intercepts templates, but doesn't matter
      config.headers.authorization = `Bearer ${ls.get('token')}`;
      return config;

    }

  };

}
