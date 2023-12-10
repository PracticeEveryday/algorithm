function sort (arr) {
    arr.sort((a, b) => a - b)

    return arr
}

// console.log(sort([1, 31, 2, 33, 56, 24, 6]))


function swap (arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp;
}

function swapV2 (arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function bubbleSort (arr) {
    let noSwaps = false;
    for (let i = arr.length; i > 0 ; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]) {
                // SWAP!
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

// console.log(bubbleSort([1,4, 7, 8]))

function selectionSort(arr) {
    // 가장 작은 값의 idx
    let smallIdx = 0;

    for(let i = 0; i< arr.length; i++) {
        smallIdx = i
        for(let j = i; j < arr.length; j++) {
            // 비교하려는
            if(arr[smallIdx] > arr[j]) {
                smallIdx = j
            }
        }
        console.log("*****************")
        console.log(arr)
        console.log("SWAPPING TO")
        swap(arr, smallIdx, i)
        console.log(arr)
        console.log("*****************")
    }
    return arr
}

// console.log(selectionSort([5, 1, 3, 7]))

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];

        for (var j = i -1 ; j >= 0 && arr[j] > currentVal; j-- ) {
            arr[j + 1] = arr[j];
        }
        arr[j+1] = currentVal
    }

    return arr
}

function merge(sortedArr1, sortedArr2) {
    let mergedArr = [];

    while (sortedArr1.length !== 0 || sortedArr2.length !== 0){
        if(sortedArr1.length === 0) {
            mergedArr.push(...sortedArr2)
            break;
        }

        if(sortedArr2.length === 0) {
            mergedArr.push(...sortedArr1)
            break;
        }

        if(sortedArr1[0] < sortedArr2[0]) {
            mergedArr.push(sortedArr1.shift())
        }

        if(sortedArr2[0] < sortedArr1[0]) {
            mergedArr.push(sortedArr2.shift())
        }
    }

    return mergedArr
}

function mergeV2 (arr1, arr2) {
    let result = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result
}

// console.log(mergeV2([1, 3, 5], [2, 4, 6]))

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return mergeV2(left, right);
}

console.log(mergeSort([10, 24, 85, 73, 23, 9, 1]))