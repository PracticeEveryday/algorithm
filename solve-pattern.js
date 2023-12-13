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
// console.log(countUniqueValues([1, 1, 1, 2]))
// console.log(countUniqueValues([1, 1, 1, 2, 3]))
// console.log(countUniqueValues([1, 2,  2, 3, 5]))


function maxSubarraySum(arr, num) {
    if(arr.length < num ){
        return null;
    }

    let max = -Infinity
    for(let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j< num; j++){
            temp += arr[i + j]
        }
        if(temp > man) {
            max = temp
        }
    }

    return max
}


function slidingWindow (arr, num) {
    let maxNum = 0;
    for(let i = 0 ; i < num; i++) {
        maxNum += arr[i];
    }

    let tempNum = maxNum;
    for(let i = 0; i < arr.length - num ; i++) {
        tempNum = tempNum - arr[i] + arr[num + i];
        maxNum = Math.max(tempNum, maxNum)
    }

    return maxNum;
}

// console.log(slidingWindow([1, 2, 5, 2, 8, 1, 5], 2))
// console.log(slidingWindow([1, 2, 5, 2, 8, 1, 5], 4))

function sameFrequency (str1, str2) {
    str1 = String(str1)
    str2 = String(str2)
    if(str1.length !== str2.length) return false
    const frequencyStr1 = {}
    const frequencyStr2 = {}

    for (const char in str1) {
        frequencyStr1.hasOwnProperty(str1[char]) ? frequencyStr1[str1[char]]++ : frequencyStr1[str1[char]] = 1
    }
    for (const char in str2) {
        frequencyStr2.hasOwnProperty(str2[char]) ? frequencyStr2[str2[char]]++ : frequencyStr2[str2[char]] = 1
    }
    for([key, value] of Object.entries(frequencyStr1)){
        if(!frequencyStr2.hasOwnProperty(key)) {
            // 키가 없다면
            return false
        }
        if(frequencyStr2[key] !== value) {
            // 값이 다르다면 false
            return false
        }

    }

    return true
}

// console.log(sameFrequency(22,222))


// 가변적인 수의 인수를 받고, 인자에 중복이 있는 지 확인하는 함수
// function areThereDuplicates (...arr) {
//     const frequencyObj = {}
//
//     for(const value of arr) {
//         frequencyObj[value] ? frequencyObj[value]++ : frequencyObj[value] = 1;
//     }
//
//     for(const value of Object.values(frequencyObj)) {
//         if(value > 1) {
//             return true
//         }
//     }
//
//     return false
// }

// console.log(areThereDuplicates(1, 2,3))

function areThereDuplicates (...arr) {
    arr.sort()
    let second = 1;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[second]) {
            return true
        }
        second++
    }
    return false
}

// console.log(areThereDuplicates(1, 4,1,2,3))

function search(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i
        }
    }

    return -1;
}

function takeShower() {
    return "Showering!"
}

function eatBreakfast() {
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood() {
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random() * items.length)]
}

function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("I'm done, I'm Ready")
}
let oddCount = 0;
function checkForOddNumbers(arr) {
    //arr의 length가 0보다 크면 계속 돌아라
    while (arr.length > 0) {
        if(arr[0] % 2 === 1) {
            oddCount++;
        }
        arr.shift()
        console.log(arr);
        checkForOddNumbers(arr)
    }
    return oddCount
}

// console.log(checkForOddNumbers([1, 2, 3, 4, 5, 6]))

function countDown (num) {
    if(num < 0) {
        console.log("DONE")
        return
    }

    console.log(num)
    num--
    countDown(num)
}

// countDown(5)

function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

// console.log(sumRange(2))


function factorialOfForLoop (num) {
    let multiple = 1
    for(let i = 1; i <= num ; i++ ) {
        multiple = multiple * i
    }

    return multiple
}

// console.log(factorialOfForLoop(4))

function factorialOfForRecursion (num) {
    let multiple = num
    if(num === 1) return 1
    num = num -1
    console.log(num)
    return multiple * factorialOfForRecursion(num)
}

// console.log(factorialOfForRecursion(4))

function outer (input) {
    const outerScopedVariable = []

    function helper(helperInput) {
        helperInput(helperInput--)
    }

    return outerScopedVariable
}
function collectOddValue (arr) {
    let oddArr = []
    function helper (helperInput) {
        if(helperInput.length===0) return

        if(helperInput[0] % 2 !== 0) {
            oddArr.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr);

    return oddArr
}

// console.log(collectOddValue([1, 2, 3, 4, 5]))

function collectOddArrPure(arr) {
    let newArr = [];

    if(arr.length ===0) return newArr;

    if(arr[0] % 2 === 0) {
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddArrPure(arr.slice(1)))

    return newArr
}

// console.log(collectOddValue([1, 2, 3, 4, 5]))


function power (밑, 지수) {
    // 밑의 거듭 제곱을 지수로 반환해야 한다!
    // 음수의 밑과 지수는 신경쓰지 말자
    // power(2,0) // 1
    // power(2,2) // 4
    // power(2,4) // 16
    if(지수 === 0 ) return 1
    return 2 * power(2, 지수 -1)
}



function factorial(num){
    if(num === 0) {
        return 1
    }
    if(num === 1) {
        return 1
    }

    return num * factorial(num - 1)
}

// console.log(factorial(1)) // 1
// console.log(factorial(2)) // 2
// console.log(factorial(4)) // 24
// console.log(factorial(7)) // 5040


function reserveRecursion(str) {
    if(str.length <= 0) return str;

    return str[str.length-1] + reserveRecursion(str.slice(0, str.length-1));
}

// console.log(reserve("abse"));
// console.log(reserve("fbdsz"));
// console.log(reserve("abcd"));


function isPalindrome (str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1]

    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    return false;
}
// console.log(isPalindrome('abcecba'));

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;



function someRecursive(arr, fn){
    // 배열의 단일 값이 콜백에 전달 될 때 true를 반환하면 true,
    // 그렇지 않으면 false를 반환해라
    if(arr.length === 0) return false;
    if(fn(arr[0])) return true

    return someRecursive(arr.slice(1), fn)
}


// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)) // false


// TODO:
function flatten(arr){

}

// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3

function capitalizeFirst (arr) {
    if(arr.length === 0) return [];
    const newArr = []
    newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    console.log('newArr', newArr)

    // if(arr.slice(1).length === 0) return newArr;

    return newArr.concat(capitalizeFirst(arr.slice(1)))
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']


function nestedEvenSum () {
    // add whatever parameters you deem necessary - good luck!
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10