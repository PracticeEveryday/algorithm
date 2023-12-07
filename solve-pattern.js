const same = (arr1, arr2) => {
    // 엣지 케이스
    if(arr1.length !== arr2.length) return false

    arr1.sort()
    arr2.sort()

    // 빈도가 같은 걸 추가해야함
    return arr1.every((num, idx) =>  arr2[idx] === num * num)
}

// console.log(same([1, 2, 3], [1, 4, 9]))
// console.log(same([1, 1, 2], [4, 4, 1])) // false가 나와야 함.


const sameSolution1 = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false

    for(let i =0; i< arr.length; i++) {
        let correctIndex = arr2.indexOf(arr[i] ** 2);
        if(correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true

}

function frequencyCounterPattern(arr1, arr2) {
    if(arr1.length !== arr2.length) return false

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0 ) + 1
    }

    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0 ) + 1
    }

    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }

        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }

    return true
}

const anagram = (str1, str2) => {
    // 문자열의 빈도수가 같으면 된다.
    // 개수가 같아야 한다.
    // 소문자만 신경쓰면 된다.

    const str1Anagram = {}
    const str2Anagram = {}

    for (const char of str1) {
        if(str1Anagram.hasOwnProperty(char)) {
            str1Anagram[char.toLocaleString()] += 1
        } else {
            str1Anagram[char.toLocaleString()] = 0
        }
    }

    for (const char of str2){
        if(str2Anagram.hasOwnProperty(char)) {
            str2Anagram[char] +=1
        } else {
            str2Anagram[char] = 0
        }
    }

    for(const [key, value] of Object.entries(str1Anagram)) {
        if(!str2Anagram.hasOwnProperty(key)) {
            return false
        } else if(value !== str2Anagram[key]){
            return false
        }
    }
    return true
}

// console.log(anagram("aaa", "aaa")) // true
// console.log(anagram("aaA", "aAa")) // true
// console.log(anagram("aab", "aaa")) // false
// console.log(anagram("aabc", "cbaa")) // true

// function sumZero(arr) {
//     for(let i = 0; i < arr.length; i++){
//         for (let j = i+1; j< arr.length; j++){
//             if(arr[i]+ arr[j] === 0){
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }

function sumZeroV2(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++
        }
    }
}

// console.log(sumZeroV2([-5, -4, -2, 0, 2]))

function countUniqueValues(arr) {
    if(arr.length === 0) {
        return 0
    }

    let first = 0;
    let second = 1;

    for(let i = 0; i < arr.length; i++){
        if(arr[first]!== arr[second]) {
            first++
            arr[first] = arr[second]
            second++
        } else {
            second++
        }
    }
    return first
}
console.log(countUniqueValues([1, 1, 1, 2]))
console.log(countUniqueValues([1, 1, 1, 2, 3]))

console.log(countUniqueValues([1, 2,  2, 3, 5]))