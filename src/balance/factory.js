export default function(API) {

  return {

    get () {

      return API.balance()
        .success(balances => {

          // stupid email addresses..
          balances.forEach(balance => {
            balance.name = balance.name.split('@').shift();
          });

          return balances;

        });

    }

  };

}
