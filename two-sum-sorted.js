/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
  let headIndex = 0;
  let tailIndex = numbers.length - 1;

  for (let i = 0; i < numbers.length; i++) {
    const sum = numbers[headIndex] + numbers[tailIndex];
    if (sum === target) {
      return [headIndex + 1, tailIndex + 1];
    } else if (sum > target) {
      tailIndex--;
    } else if (sum < target) {
      headIndex++;
    }
  }

};