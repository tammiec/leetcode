/**
 * @param {number} n
 * @return {boolean}
 */

// you will always lose if there are 4 stones on your turn
// so as long as the number is not divisible by 4, you can win
var canWinNim = function(n) {
  return n % 4 != 0;
};