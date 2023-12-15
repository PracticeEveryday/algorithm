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
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(this.length === 0) {
            return undefined;
        }

        let oldTail = this.tail;
        if(oldTail.prev) {
            // prev가 없으면 head와 tail은 같은 곳을 가리키게 된다!
            this.tail = this.tail.prev;
            // tail의 next를 없애면 head의 next도 사라지게 된다!
            this.tail.next = null;

            // 마지막 노드가 이전 노드의 주소를 몰라야 이전 노드에 접근할 수 없게된다.
            // 마지막 노드와 이전 노드의 연결도 끊어준다.
            oldTail.prev = null
        }

        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return oldTail
    }

    shift() {
        if(this.length === 0) return undefined;
        let oldHead = this.head;

        if(oldHead.next) {
            this.head = oldHead.next;
            // 두 개의 연결을 잘라야한다.
            // 새로운 헤드의 이전 주소를 없애고
            this.head.prev = null;

            // 이전 헤드의 다음 주소를 없앤다.
            oldHead.next = null;
        }

        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return oldHead;
    }

    unshift(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
        this.length++
        return true;
    }

    get(idx) {
        if(idx < 0) return undefined;
        if(idx >= this.length) return undefined;
        const flag = Math.floor(this.length / 2);

        let temp;
        if(idx >= flag) {
            temp = this.tail;
            // tail에서 출발
            for(let i = this.length - 1 ; i > idx; i--) {
                temp = temp.prev;
            }

        } else {
            // head에서 출발
            temp = this.head;
            for(let i = 0 ; i < idx ; i++) {
                temp = temp.next
            }
        }
        return temp;
    }
}


const doubleList = new DoubleLinkedList();
doubleList.push(1);
doubleList.push(2);
doubleList.push(3);

// console.log(doubleList);
// console.log(doubleList.pop());
// console.log(doubleList.pop());
// console.log(doubleList.pop());
// console.log(doubleList.pop());
// console.log(doubleList);

console.log(doubleList);
console.log(doubleList.shift());
console.log(doubleList.shift());
console.log(doubleList.shift());
console.log(doubleList.shift());
console.log(doubleList);

doubleList.unshift(1);
doubleList.unshift(2);
doubleList.unshift(3);
doubleList.unshift(4);
doubleList.unshift(5);
doubleList.unshift(6);
doubleList.unshift(7);
doubleList.unshift(8);

console.log(doubleList.get(0).val)
console.log(doubleList.get(1).val)
console.log(doubleList.get(2).val)
console.log(doubleList.get(3).val)
console.log(doubleList.get(4).val)
console.log(doubleList.get(5).val)
console.log(doubleList.get(6).val)
console.log(doubleList.get(7).val)
