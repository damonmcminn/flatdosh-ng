export default function(balance, pubsub) {

  function getBalances() {
    balance.get().success(balances => vm.balances = balances);
  }
  
  let vm = this;

  getBalances();

  pubsub.sub('update balances', msg => {
    getBalances();
  });

}
