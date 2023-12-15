class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }
//
//     insert(val) {
//         const newNode = new Node(val);
//
//         // root가 없다면 최초의 노드가 root가 된다!
//         if(!this.root) {
//             this.root = newNode;
//             return this;
//         }
//
//         let current = this.root;
//         // 왼쪽 자식 노드가 있으면, 오른쪽 자식 노드가 있으면 while 루프를 계속 돈다.
//         // 가려는 왼쪽 또는 오른쪽 자식 노드가 없으면 그 자리는 새로운 노드의 자리가 되기 때문이다.
//         while ((val < current.val && current.left) || (val > current.val && current.right)) {
//             if(val > current.val) {
//                 current = current.right
//             } else {
//                 current = current.left
//             }
//         }
//
//         val > current.val ? current.right = newNode : current.left = newNode;
//
//         return this
//     }
// }


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);

        // root가 없다면 최초의 노드가 root가 된다!
        if(!this.root) {
            this.root = newNode;
            return this;
        }

        // root를 시작점으로 찾아가야 하는 노드들을 업데이트 해줘야함.
        // 연결 리스트와 느낌이 비슷함.
        let current = this.root;

        // 무한 루프를 돌고, 작업이 끝나는 부분에 return을 적용해주자.
        // 즉, 노드를 삽입하면 무한 루프를 끝낸다.
        while (true) {
            if(val === current.val) return undefined;
            if(val < current.val) {
                if(!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left

            } else {
                if(!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(4);

console.log(tree)

