/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  
  if (head && head.next) { // check if current node is null or if the next node is null
    if (head.val === head.next.val) { // if it is a duplicate
      head.next = head.next.next; // remove the duplicate
      deleteDuplicates(head); // run the function again on the current node in case of more than one duplicate
    } else {
      deleteDuplicates(head.next); // otherwise run the function for the next node
    }
  }

  // when either the current node or the next node is null, return
  return head;
  
};