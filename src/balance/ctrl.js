export default function(balance, pubsub) {

  let vm = this;

  function getBalances() {
    balance.get().success(balances => vm.balances = balances);
  }

  getBalances();

  pubsub.sub('update balances', () => {
    getBalances();
  });

}
