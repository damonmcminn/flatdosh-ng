export default function(ls, pubsub) {
  let main = this;

  // clear token...
  pubsub.sub('logout', () => main.loggedIn = false);
  pubsub.sub('login', success => {
    if (success) {
      main.loggedIn = true;
    }
  });

  main.loggedIn = !!ls.get('token');

}
