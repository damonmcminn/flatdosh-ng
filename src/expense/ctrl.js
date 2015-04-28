export default function(expenseFactory, pubsub) {

  let vm = this;
  
  pubsub.pub('page', 'save');

  vm.save = function() {

    expenseFactory.save(vm.expense).then( () => {
      pubsub.pub('update balances');
      vm.expense = null; // clear the form
    });

  }
}
