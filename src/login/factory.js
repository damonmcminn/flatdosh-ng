export default function(API, ls, pubsub) {

  return {

    do (user) {
      return API.login(user)
        .success(res => {
          ls.set('token', res.token);
          pubsub.pub('login', true);
          return null;
        });
    }

  };

}
