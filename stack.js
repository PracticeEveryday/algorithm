// const stack = [];
//
// stack.push("google.com");
// stack.push("instagram");
// stack.push("youtube");
//
//
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
//
//
//
// stack.unshift("google.com");
// stack.unshift("instagram");
// stack.unshift("youtube");
//
// console.log(stack.shift());
// console.log(stack.shift());
// console.log(stack.shift());
// console.log(stack.shift());



// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }
//
// class Stack {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//
//     push(val) {
//         const newNode = new Node(val);
//         if(!this.size) {
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             this.last.next = newNode;
//             this.last = newNode;
//         }
//
//         this.size++;
//
//         return this.size;
//     }
//
//     pop() {
//         if(!this.size) return null
//
//         let current = this.first;
//         let newTail = current;
//
//         while (current.next) {
//             newTail = current;
//             current = current.next;
//         }
//
//         this.last = newTail;
//         this.last.next = null;
//         this.size--;
//
//         if(!this.size) {
//             this.first = null;
//             this.last = null;
//         }
//         return current;
//     }
// }
//
// const stack = new Stack();
// console.log(stack.pop());
// stack.push(1);
// stack.push(2);
// stack.push(3);
//
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.size) {
            this.first = newNode;
            this.last = newNode;

        } else {
            let oldFirst = this.first;
            this.first = newNode;
            this.first.next = oldFirst;
        }
        return ++this.size
    }

    pop() {
        if(!this.first) return null;
        let oldFirst = this.first;

        if(this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        oldFirst.next = null;
        this.size--
        return oldFirst.val;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack)

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());