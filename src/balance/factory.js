export default function(API) {

  return {

    get () {

      return API.balance()
        .success(balances => {

          let debt = balances.reduce((prev, curr) => {
            return prev.balance < curr.balance ? prev : curr;
          });

          debt.balance < 0 ? debt.danger = true : null;
          
          balances.filter(balance => (!balance.danger && balance.balance < 0))
            .forEach(balance => balance.warning = true);

          return balances;

        });

    }

  };

}
