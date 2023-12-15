// const queue = []
// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.push(4);
//
// console.log(queue)
//
// console.log(queue.shift());
// console.log(queue.shift());
// console.log(queue.shift());
// console.log(queue.shift());
//
// queue.unshift(1);
// queue.unshift(2);
// queue.unshift(3);
// queue.unshift(4);
//
// console.log(queue.pop());
// console.log(queue.pop());
// console.log(queue.pop());
// console.log(queue.pop());

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue (val) {
        const newNode = new Node(val);
        if(!this.size) {
            // 없다면 최초의 노드의 주소를 담는다.
            this.first = newNode;
            this.last = newNode;
        } else {
            // 있다면 뒤에 삽입한다.
            this.last.next = newNode;
            this.last = newNode;

        }
        return ++this.size
    }

    dequeue() {
        if(!this.size) return null;

        // 있으면 앞에것을 제거하기
        let oldFirst = this.first;
        this.first = oldFirst.next;
        oldFirst.next = null;

        this.size--;
        if(this.size === 0) {
            this.first = null;
            this.last = null;
        }

        return oldFirst;
    }
}
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q)

console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())

console.log(q)