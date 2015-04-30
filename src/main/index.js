export default function(ls, pubsub) {

  let main = this;

  let user = ls.get('user');

  if (user) {
    let {name} = user;
    main.name = name;
  }

  main.change = function(page) {
    main.toggleCollapsed();
    main.page = page;
  };

  pubsub.sub('page', page => main.page = page);

  pubsub.sub('login', success => {
    if (success) {
      main.loggedIn = true;
      let {name} = ls.get('user');
      main.name = name;
    }
  });

  main.loggedIn = !!ls.get('token');

  main.logout = function() {

    ls.drop('token');
    ls.drop('user');
    main.loggedIn = false;

  };

  main.collapsed = true;
  main.toggleCollapsed = function() {
    main.collapsed = !main.collapsed;
  };

}
