export function money() {

  return function(val) {

    let amt = +val;

    return amt < 0 ? `-£${(-amt).toFixed(2)}` : `£${amt.toFixed(2)}`;

  }

}
