export default function(ls, pubsub, group, API) {

  let main = this;
  main.loggedIn = !!ls.get('token');
  main.collapsed = true;

  if (main.loggedIn) {
    // get settings
    API.settings().success(user => {

      ls.set('user', user);
      let {groups} = user;

      // only a single group at the moment
      let g = groups[0];

      group.id = g.id;
      group.name = g.name;

      main.group = group;

    });

  }

  // events
  pubsub.sub('page', page => main.page = page);

  pubsub.sub('login', success => {
    if (success) {
      main.loggedIn = true;
    }
  });

  main.logout = function() {

    ls.drop('token');
    ls.drop('user');
    main.loggedIn = false;

  };

  main.change = function(page) {
    main.toggleCollapsed();
    main.page = page;
  };

  main.toggleCollapsed = function() {
    main.collapsed = !main.collapsed;
  };

}
