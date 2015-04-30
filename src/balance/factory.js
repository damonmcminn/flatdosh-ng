export default function(API) {

  return {

    get () {

      return API.balance()
        .success(balances => {

          // attach labels for determing warning/danger classes

          // the user with the largest negative balance
          let debt = balances.reduce((prev, curr) => {
            return prev.balance < curr.balance ? prev : curr;
          });

          // flag debt for styling
          if (debt.balance < 0) {
            debt.danger = true;
          }

          // only executes if balances are less than zero
          // ergo a debt.danger exists
          balances.filter(balance => (!balance.danger && balance.balance < 0))
            .forEach(balance => {
              if (balance.balance === debt.balance) {
                balance.danger = true;
              } else {
                balance.warning = true;
              }
            });

          balances.forEach(balance => {
            balance.name = balance.name.split('@').shift();
          });

          return balances;

        });

    }

  };

}
