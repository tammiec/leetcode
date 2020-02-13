/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      length--;
      i--;
    }
  }

  return length;
};