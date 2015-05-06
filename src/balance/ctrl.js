export default function(balance) {

  let vm = this;

  function getBalances() {
    balance.get()
      .success(balances => vm.balances = balances)
      .error(err => console.log(err));
  }

  getBalances();

}
