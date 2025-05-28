class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
  static covertArr2DLL(arr) {
    let head = new Node(arr[0]);
    let temp = head;
    for (let i = 1; i < arr.length; i++) {
      let data = new Node(arr[i], null, temp);
      temp.next = data;
      temp = data;
    }
    return head;
  }
  static traverseDD(head) {
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
  static insertionHead(head , val){
    let newHead = new Node (val , head )
    if(head !== null){
        head.prev = newHead
    }
    return newHead;
  }
  // Delete the head
  static deleteHead(head){
    if(head === null || head.next === null) return null
    let newPrev = head;
    head = newPrev.next;
    head.prev = null;
    newPrev.next = null;
    return head
  }
  static deleteTail(head){
     if(head === null || head.next === null) return null
     let tail = head;
     while(tail.next  !== null){
      tail = tail.next;
     }
     let newTail = tail.prev;
     tail.prev = null;
     newTail.next = null;
     return head;
  }
}

let arr = [12, 1, 3, 8];
let nodeList = Node.covertArr2DLL(arr);
// console.log(nodeList,"nodeList is here")



// Traversing the data
// Node.traverseDD(nodeList);



// Insertion in head;
let newNodeHead = Node.insertionHead(nodeList,5)

// Delete head
let deletedHead = Node.deleteHead(newNodeHead)
// Delete Tail
let deleteTail = Node.deleteTail(deletedHead)
Node.traverseDD(deleteTail);