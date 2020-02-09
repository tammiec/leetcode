/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

  const numArray = x.toString().split('');

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] !== numArray[numArray.length - (i + 1)]) {
      return false;
    }
  }

  return true;

};