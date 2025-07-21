// Reverse doubly linkedlist

class Node {
    constructor(prev= null , data,  next = null){
        this.prev = prev
        this.next = next
        this.data = data
    }
}
function traverseDD(head) {
    let temp = head;
    while (temp !== null) {
      console.log(temp.data, "data is here");
      // console.log(temp.next, "next value is here");
      // console.log(temp.prev, "prev value is here");
      temp = temp.next;
      console.log(
        "-----------------------------------------------------------------"
      );
    }
  }
function convertArrIntoDLL(arr){
 let head = new Node (null ,  arr[0] , null);
 let temp = head;
 for(let i = 1 ; i < arr.length; i++){
    let node = new Node (temp , arr[i])
    temp.next = node ;
    temp = node ;
 }
 return head;
}

let newHead = convertArrIntoDLL([1,2,3,4])
// console.log(newHead, "head is here ")
console.log(traverseDD(newHead))

// Reverse a ll
function reverseDLL(head){
    let current = head;;
    while(current !== null){
        let last = current.next;
       current.back = current.next
       current.next = last 
    }
}
reverseDLL(head)