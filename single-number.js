/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

  const sorted = nums.sort((a, b) => a - b);

  for (let [i, num] of sorted.entries()) {
    if (num !== sorted[i - 1] && num !== sorted[i + 1]) {
      return num;
    }
  }
    
};