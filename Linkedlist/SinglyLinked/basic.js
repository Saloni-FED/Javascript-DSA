class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function insertHead(head, value) {
//   console.log(head, "head is here for insert head");
  let temp = new Node(value, head);
  return temp;
}


function traverse (head){
    let temp = head ;
    while(temp !== null){
        console.log(temp.data,"temp data is here ")
        temp = temp.next;
        console.log(temp,"next until ")
    }
}



function search (value, head){
    let temp = head;
    while(temp !== null){
        if(temp.data === value ){
            return true;
        }
        temp = temp.next;
    }
    return false;
}
let node1 = new Node(10);
node1.next = new Node(11);
node1.next.next = new Node(20);
// console.log(node1,"node1 is here")

let insert = insertHead(node1, 100);
// console.log(insert, "inserting the value");

// console.log(traverse(node1))

console.log(search(10, insert))


