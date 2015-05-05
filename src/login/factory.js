export default function(API, ls, pubsub, group) {

  return {

    do (user) {
      return API.login(user)
        .success(res => {
          ls.set('token', res.token);
          ls.set('user', res.data);

          let g = res.data.groups.shift();
          group.id = g.id;
          group.name = g.name;

          pubsub.pub('login', true);
          return null;
        });
    }

  };

}
