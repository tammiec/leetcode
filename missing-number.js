/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

  if (!nums.includes(0)) {
    return 0;
  } else {
    const sorted = nums.sort((a, b) => a - b);
  
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i + 1] !== sorted[i] + 1) {
        return sorted[i] + 1;
      }
    }
  }

};