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
//get at index 

getAt(index) {
let current = this.head;
let count = 0;
while(current) {
if (count == index) {

    console.log(current.data);
}
count++;
current = current.next;
}
return null;

}
//Remove at index
removeAt(index) {
if (index > 0 && index > this.size) {
return;
}
let current = this.head;
let previous;
let count = 0;
//remove the first 
if (index === 0) {
this.head = current.next;
} else {
    while(count < index) {
count++;
previous = current;
current = current.next;

    }
previous.next = current.next;
}
this.size--;


}

//clear List 
clearList() {
this.head = null;
this.size = 0;

}






//Insert At index 
insertAt(data,index) {
//if index is out of range
if (index > 0 && index > this.size) {
    return;
}
//for the first index
if (index === 0) {
    this.head = new Node(data,this.head);
return;
}
const node = new Node(data);
let current,previous;

//set current to first
current = this.head;
let count = 0;

while (count < index) {
previous = current;
count++;
current = current.next;

}

node.next = current;
previous.next = node;
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
ll.insertLast(400);
ll.clearList();
ll.Printlistdata();
ll.removeAt(2)
//ll.getAt(3);

