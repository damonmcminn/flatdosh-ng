export default function(expenseFactory, pubsub) {


  let vm = this;

  vm.expenses = [];

  vm.history = function() {

    expenseFactory.all().then(history => vm.expenses = history);

  };

  vm.save = function() {

    expenseFactory.save(vm.expense).then( () => {
      pubsub.pub('update balances');
      vm.expense = null; // clear the form
    });

  }
}
