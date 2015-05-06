export default function(expenseFactory, group, ls) {

  let vm = this;

  vm.expense = {};

  vm.save = function() {

    vm.expense.group = group.id;

    expenseFactory.save(vm.expense).then( () => {
      // clear the form;
      vm.expense = {
        spender: vm.expense.spender
      }
    });

  };

  // should be in user model
  // sets default value
  vm.expense.spender = ls.get('user').id;

  expenseFactory.members()
    .success(members => {

      vm.members = members.map(member => {

        return {
          name: member.name.split('@').shift(),
          id: member.email
        };

      });

    });
}
