export default function(ls) {

  let user = ls.get('user');

  if (!user) {
    return {};
  } else {
    // only one group at the moment...
    // take the first
    return user.groups.pop();
  }

}
