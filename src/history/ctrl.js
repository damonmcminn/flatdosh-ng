export default function(expenseFactory, pubsub) {

  let vm = this;

  vm.history = [];

  function getHistory() {
    expenseFactory.all().then(history => vm.history = history);
  }

  getHistory();

  pubsub.sub('update balances', () => getHistory());

}
