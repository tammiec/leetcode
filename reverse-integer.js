/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  const numToArray = x.toString().split('');

  const reversed = numToArray.reverse();
  const withoutNeg = reversed.filter(num => num !== '-');

  if (Math.abs(parseInt(withoutNeg.join(''))) > Math.pow(2, 31)) {
    return 0;
  } else if (reversed.includes('-')) {
    return -Math.abs(parseInt(withoutNeg.join('')));
  } else {
    return Math.abs(parseInt(withoutNeg.join('')));
  }
    
};