/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const newStr = s.replace(/[^\w]/g, '').toLowerCase();
  console.log('newStr:', newStr)

  for (let i = 0; i < (Math.ceil(newStr.length / 2)); i++) {
    if (newStr[i] !== newStr[newStr.length - (i + 1)]) {
      return false;
    }
  }
  
  return true;
};