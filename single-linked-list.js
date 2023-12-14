class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

const first = new Node("Hi")
first.next = new Node("there")
first.next.next = new Node("how")
first.next.next.next = new Node("are")
first.next.next.next.next = new Node("you")

// class SingleLinkedList {
//     constructor() {
//         this.length = 0;
//         this.head = null;
//         this.tail = null;
//     }
//
//     push(val) {
//         const newNode = new Node(val);
//         if(!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             // 마지막의 다음 노드에 newNode를 넣어준다.
//             this.tail.next = newNode;
//
//             // 마지막 노드가 newNode를 가리키게 하면 된다.
//             this.tail = newNode;
//         }
//
//         this.length++
//         return this
//     }
//
//
//     // 리스트를 끝까지 따라가는 방법
//     traverse() {
//         let current = this.head;
//         while (current) {
//             console.log(current.val);
//             current = current.next;
//         }
//     }
//
//     pop() {
//         let lastVal;
//         if(this.length === 0) return undefined;
//         if(this.length === 1) {
//             lastVal = this.head.val
//             this.head = null;
//             this.tail = null
//             this.length--
//
//             return lastVal
//         }
//
//         let current = this.head;
//         // 마지막의 것을 찾는 것임.
//         while (current.next.next !== null) {
//             current = current.next
//         }
//
//         lastVal = current.next.val;
//         current.next = null;
//         this.tail = current;
//         this.length--
//         return lastVal;
//     }
// }

class SingleLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // 마지막의 다음 노드에 newNode를 넣어준다.
            this.tail.next = newNode;

            // 마지막 노드가 newNode를 가리키게 하면 된다.
            this.tail = newNode;
        }

        this.length++
        return this
    }


    // 리스트를 끝까지 따라가는 방법
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        // 마지막 노드 찾기
        while (current.next) {
            // newTail => current를 바라봄으로써 newTail은 항상 current를 따라가는 형식이 됨.
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        // 마지막 다음 노드와의 연결을 끊어버리기
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }


        return current
    }

    shift() {
        if(!this.head) return undefined
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead.val
    }

    unshift(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++

        return this
    }

    get(idx) {
        if(idx < 0) return null;
        if(this.length <= idx) return null;

        let current = this.head;
        let counter = 0

        while (counter !== idx) {
            current = current.next
            counter++
        }

        return current;
    }

    set(idx, val) {
        const foundNode = this.get(idx);
        if(!foundNode) return false;

        foundNode.val = val
        return true;
    }
}

const singleList = new SingleLinkedList();
console.log(singleList);

singleList.push("Hello")
singleList.push("Node");
singleList.push("And");
// console.log(singleList);

console.log(singleList.shift());
console.log(singleList.shift());
console.log(singleList.shift());
console.log(singleList.shift());
console.log(singleList)

singleList.unshift(1);
console.log(singleList)
singleList.unshift(2);
singleList.unshift(3);
singleList.unshift(4);
singleList.unshift(5);

console.log("--------------------------------")
console.log(singleList.get(0))
console.log(singleList.get(1))
console.log(singleList.get(2))
console.log(singleList.get(3))
console.log(singleList.get(4))
console.log(singleList.get(5))
console.log(singleList.get(-1))

// singleList.traverse();
// console.log(singleList.pop());
// console.log(singleList.pop());
// console.log(singleList.pop());
// console.log(singleList.pop());