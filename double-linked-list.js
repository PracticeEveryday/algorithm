class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

const first = new Node(13);
first.next = new Node(12);
first.next.prev = first

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            const currentNode = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.prev = currentNode
        }
        this.length++;
        return this;
    }
}


const doubleList = new DoubleLinkedList();
doubleList.push(1);
doubleList.push(2);
doubleList.push(3);

console.log(doubleList)
