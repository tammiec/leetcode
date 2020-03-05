/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

  let numArray = [];

  if (m !== 0) {
    for (let i = 0; i < m; i++) {
      if (i === 0 || nums1[i] >= nums1[i - 1]) {
        numArray.push(nums1[i]);
      } else {
        break;
      }
    }
  }

  numArray = [...numArray, ...nums2].sort((a, b) => a - b);
  console.log('numArray:', numArray)

  for (let j = 0; j < (m + n); j++) {
    nums1.splice(j, 1, numArray[j]);
  }
  
};