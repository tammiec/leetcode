/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < target) {
        if (i === nums.length - 1) {
          return i + 1;
        } else if (nums[i + 1] > target) {
          return i + 1;
        }
      } else if (i === 0 && nums[i] > target) {
        return 0;
      }
    }
  }
    
};