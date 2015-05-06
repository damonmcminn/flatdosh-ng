export default function(expenseFactory, ls) {

  let vm = this;

  // could be undefined? -> should return empty object
  let {id, shared} = ls.get('user');
  vm.user = id;
  vm.shared = shared;

  vm.history = [];

  vm.checkDeletion = function(idx) {
    let shareId = vm.history[idx].shareId;
    // null if not exist
    if (shareId) {
      vm.history.filter(e => {
        return e.user !== id && e.shareId === shareId;
      }).forEach(e => e.delete = !e.delete);
    }
  }

  function getHistory() {
    expenseFactory.all().then(history => {
      history.forEach(item => item.name = item.name.split('@').shift());
      vm.history = history;
    });
  }

  getHistory();

  vm.deleteExpenses = function() {

    let deletions = vm.history
      .filter(e => e.delete)
      .map(e => e.id);

    let confirmed = confirm('Delete selected expenses?');

    if (deletions.length > 0 && confirmed) {

      expenseFactory.destroy(deletions).then(res => {
        // success?
        
        // mark deleted rather than another API call to server
        res.deleted.forEach(id => {
          vm.history.forEach(e => {
            if (e.id === id) {
              e.deleted = true;
            }
          });
        });
      });
    }

  };

}
