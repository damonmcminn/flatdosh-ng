export default function(API, events) {

  return {

    all () {

      return API.expense.all()
        .then(res => res.data);

    },

    save (expense) {

      return API.expense.save(expense)
        .then(res => res.data);

    },

    destroy (expenses) {

      return API.expense.destroy(expenses)
        .then(res => res.data);

    },

    members () {
      return API.members();
    }

  };

}
