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

    find(val) {
        if(!this.root) return null;
        let currentNode = this.root;
        while (true) {
            // 같으면 해당 노드를 반환한다.
            if(currentNode.val === val) return currentNode;
            if(val > currentNode.val && currentNode.right) {
                currentNode = currentNode.right
            } else if(val < currentNode.val && currentNode.left) {
                currentNode = currentNode.left
            } else {
                return null
            }
        }
    }

    contains(val) {
        if(!this.root) return false;
        let currentNode = this.root;
        while (true) {
            // 같으면 해당 노드를 반환한다.
            if (currentNode.val === val) return true;
            if (val > currentNode.val && currentNode.right) {
                currentNode = currentNode.right
            } else if (val < currentNode.val && currentNode.left) {
                currentNode = currentNode.left
            } else {
                return false
            }
        }
    }

    BFS() {
        // root가 없으면 null을 반환한다.
        if(!this.root) return null;

        const queue = [this.root];
        const visited = [];

        // queue가 비어있을 때까지 순회한다.
        while (queue.length !== 0) {
            // queue가 들어 있다면 왼쪽 오른 쪽을 확인한다.
            const current = queue.shift();

            // 현재 확인해야 하는 값을 visited에 넣어준다.
            visited.push(current.val);

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }

        return visited;
    }

    DFSProOrder() {
        // root가 앖더면 비어 있는 트리로 null을 반화한다.
        if(!this.root) return null;

        // 노드를 방문하는 순서가들어 있는 변수
        const data = [];

        // current가 있는 이유는 사용자가 시작학 원하는 노드가 있을 수 있기 때문이다.
        // 즉, 꼭 루트부터 순회하고 싶지 않을 수도 있기 떄문이다.
        let current = this.root;
        function traverse(node) {
            // node의 값을 넣어주기
            data.push(node.val);

            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(current);
        return data;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.BFS());
console.log(tree.DFSProOrder());



