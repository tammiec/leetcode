/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {

  for (let i = 0; i < (Math.ceil(s.length / 2)); i++) {
    if (s[i] !== s[s.length - (i + 1)]) {
      return false;
    }
  }
  
  return true;
};

var validPalindrome = function(s) {
  const newStr = s.replace(/[^\w]/g, '').toLowerCase();
  
  for (let i = 0; i < (Math.ceil(newStr.length / 2)); i++) {
    if (newStr[i] !== newStr[newStr.length - (i + 1)]) {
      const stringA = newStr.substring(0, i) + newStr.substring(i + 1);
      console.log('stringA:', stringA)
      const stringB = newStr.substring(0, newStr.length - (i + 1)) + newStr.substring(newStr.length - (i + 1) + 1);
      console.log('stringB:', stringB)
      return isPalindrome(stringA) || isPalindrome(stringB);
    }
  }

  return true;
  
};