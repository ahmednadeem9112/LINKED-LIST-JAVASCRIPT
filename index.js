class Node {
constructor (data, next = null) {
this.data = data;
this.next = next;

}
}
//First Node
class LinkedList{ 
constructor () {
this.head = null;
this.size = 0;
}

//First node
insertFirst(data) {
this.head = new Node(data,this.head);
this.size++;
}

//Second node
insertLast(data) {
let node = new Node(data);
let current;

//if next is empty than make than make an head
if (!this.head) {
    this.head = node;
} else {
current = this.head;
while(current.next) {
current = current.next;

}
current.next = node;    
}
this.size++;


}





Printlistdata() {
let current = this.head;

while(current) {
console.log(current.data);
current = current.next;

}


}






}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.Printlistdata();






