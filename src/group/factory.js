export default function(ls) {

  let {groups} = ls.get('user');
  let group = ls.get('group');

  if (!group) {
    let first = groups[0];
    ls.set('group', first);
    group = first;
  }

  let {id, name} = group;

  return {
    all: groups,
    id,
    name
  };

}
