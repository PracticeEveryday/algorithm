function linearSearch (arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === num) {
            return i
        }
    }

    return -1
}

// console.log(linearSearch([1, 4, 2, 3], 2))

function binarySearch(sortedArr, num) {
    let left = 0
    let binaryPointer = Math.floor(sortedArr.length / 2);
    let right = sortedArr.length - 1

    while (left < right) {
        // 가운데 값보다 크다면 오른 쪽을 보아야 한다.
        if(sortedArr[binaryPointer] > num) {
            left = binaryPointer++
            binaryPointer = Math.floor((right - left) / 2)
        } else if (sortedArr[binaryPointer] === num) {
            return binaryPointer
        } else {
            right = binaryPointer--
            binaryPointer = Math.floor((right - left) / 2)
        }

    }
    return -1
}

// console.log(binarySearch([1, 2, 3, 4, 5], 2))

function binarySearchAnswer (arr, elem) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)

    while (arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2)
    }
    if (arr[middle] === elem) {
        return middle
    }
    return -1
}

function naiveString (longStr, shortStr) {
    let count = 0
    for (let i = 0; i < longStr.length; i++) {
        for(let j  = 0 ; j < shortStr.length; j++) {
            if(longStr[i + j] === shortStr[j]) {
                console.log("BREAK!")
                // break는 루프를 멈추라는 뜻이다!
                break;
            }
            // 0부터 시작이니까
            if(j === shortStr.length - 1){
                console.log("FOUND ONE!")
                count++
            }
        }
    }

    return count
}