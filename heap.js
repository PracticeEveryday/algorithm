class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    // insult(val) {
    //     this.value.push(val);
    //
    //     // 부모 노드가 있고, 부모 노드보다 값이 크면 bubbleup한다.
    //     // 내 위치
    //     let addedIdx = this.value.length - 1;
    //     // 부모 노드 위치
    //     let parentIdx = Math.floor((addedIdx - 1) / 2);
    //     while(this.value[addedIdx] > this.value[parentIdx] && parentIdx >= 0){
    //         let temp = this.value[parentIdx];
    //         this.value[parentIdx] = this.value[addedIdx];
    //         this.value[addedIdx] = temp;
    //
    //
    //         addedIdx = parentIdx
    //         parentIdx = Math.floor((addedIdx - 1) / 2);
    //     }
    //
    //     return val;
    // }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx
        }
    }

    extractMax() {
        
    }
}

const maxHeap = new MaxBinaryHeap();

maxHeap.insert(100)
maxHeap.insert(19)
maxHeap.insert(36)
maxHeap.insert(17)
maxHeap.insert(12)
maxHeap.insert(25)
maxHeap.insert(5)
maxHeap.insert(200)

console.log(maxHeap.values);