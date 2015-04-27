export default function(balance, pubsub) {

  let vm = this;

  pubsub.sub('update balances', msg => {
    balance.get().success(balances => vm.balances = balances);
  });

  balance.get().success(balances => vm.balances = balances);

}
