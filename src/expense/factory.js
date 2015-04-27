export default function(API, events) {

  return {

    all () {

      return API.expense.all()
        .then(res => res.data);

    },

    save (expense) {

      return API.expense.save(expense)
        .then(res => res.data);

    }

  };

}
