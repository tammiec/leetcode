/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 3) {
    return n;
  } else {
    
    // fibonacci sequence to determine increase between solutions
    let total = 1;
    let prev = 1;

    // total number of combos - starts at 3 since if n < 3 it's covered above
    let combos = 3;

    for (let i = 3; i < n; i++) {
      let temp = total;
      total = total + prev;
      prev = temp;
      combos = combos + total;
    }

    return combos;

  }
};