/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

  let numCount = {};

  for (let num of nums) {
    if (numCount[num]) {
      numCount[num]++;
    } else {
      numCount[num] = 1;
    }
  };

  let majorityVal = 0;
  let majorityEl;

  for (let key of Object.keys(numCount)) {
    if (numCount[key] > majorityVal) {
      majorityEl = parseInt(key);
      majorityVal = numCount[key];
    }
  }

  return majorityEl;
  
};