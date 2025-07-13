class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
// My approach
// function findMid(head) {
//   let temp = head;
//   let cnt = 1;
//   while (temp.next !== null) {
//     cnt++;
//     temp = temp.next;
//   }
//   console.log(cnt);
//   let traverse = Math.ceil(cnt / 2);
//   let num = traverse % 2 === 0 ? traverse : traverse + 1;
//   temp = head;
//   while (temp.next !== null && traverse > 0) {
//
//     temp = temp.next;
//     console.log("inside the loop");
//     traverse--;
//   }
//   return temp;
// }

// ----------------------

// Optimal Approach Torse and Rabbit Algo

function traverse(arr){
    let head = new Node(1)
    let curr = head;
    for(let i = 0 ;  i < arr.length ; i++){
        
    }
}
function findMid(head) {
  let fast = head;
  let slow = head;
  while (fast && slow && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log(findMid(head));
