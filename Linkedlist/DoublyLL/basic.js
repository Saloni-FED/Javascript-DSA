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
      temp = data
    }
    return head
  }
 static traverseDD(head){
  let temp = head;
  while(temp.next !== null){
    console.log(temp.data,"data is here")
    console.log(temp.next ,"next value is here")
    console.log(temp.prev ,"prev value is here")
    temp = temp.next
    console.log('-----------------------------------------------------------------')
  }
 } 
}

let arr = [12,1,3,8];
let nodeList = Node.covertArr2DLL(arr);
// console.log(nodeList,"nodeList is here")

// Traversing the data 
Node.traverseDD(nodeList)