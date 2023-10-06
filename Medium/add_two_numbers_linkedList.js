class ListNode {
  val;
  next;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 || l2) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    const sum = x + y + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    current = current.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}

function createLinkedList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummyHead.next;
}

function linkedListToArray(head) {
  let result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  return result;
}

const l1 = createLinkedList([2, 4, 3]);
const l2 = createLinkedList([5, 6, 4]);
const result = addTwoNumbers(l1, l2);

console.log(linkedListToArray(result));
