/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function getNum(listNode, array = []) {
  let digits = array;
  
  if (listNode.next !== null) {
    digits.push(listNode.val);
    getNum(listNode.next, digits);
  } else {
    digits.push(listNode.val);
  }

  return digits;
};

var addTwoNumbers = function(l1, l2) {
  let num1 = parseInt(getNum(l1).reverse().join('')).toFixed(0);
  console.log('num1:', num1)
  let num2 = parseInt(getNum(l2).reverse().join('')).toFixed(0);
  console.log('num2:', num2)
  let sum = num1 + num2;
  let sumArray = sum.toString().split('').map(num => parseInt(num));
  console.log('sumArray:', sumArray)
  let list;

  for (let [index, num] of sumArray.entries()) {
    if (index === 0) {
      list = new ListNode(num);
    } else {
      let currNode = new ListNode(num);
      currNode.next = list;
      list = currNode;
    }
  }

  return list;
};

