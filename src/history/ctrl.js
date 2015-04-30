export default function(expenseFactory, pubsub, ls) {

  let vm = this;

  // could be undefined? -> should return empty object
  let user = ls.get('user').id;
  vm.user = user;

  vm.history = [];

  vm.checkDeletion = function(idx) {
    let shareId = vm.history[idx].shareId;
    // null if not exist
    if (shareId) {
      vm.history.filter(e => {
        return e.user !== user && e.shareId === shareId;
      }).forEach(e => e.delete = !e.delete);
    }
  }

  function getHistory() {
    expenseFactory.all().then(history => {
      vm.history = history;
    });
  }

  getHistory();

  pubsub.sub('update balances', (publisher) => {
    return publisher === 'history' ? false : getHistory();
  });

  vm.deleteExpenses = function() {

    let deletions = vm.history
      .filter(e => e.delete)
      .map(e => e.id);

    //let confirmed = confirm('Delete selected expenses?');

    //return confirmed ? del(deletions) : false;

    expenseFactory.destroy(deletions).then(res => {
      // success?
      
      pubsub.pub('update balances', 'history');
      // mark deleted rather than another API call to server
      res.deleted.forEach(id => {
        vm.history.forEach(e => {
          if (e.id === id) {
            e.deleted = true;
          }
        });
      });
    });

  };

}
