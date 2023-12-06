function addUpTo(n) {
    let total = 0;
    // for loop
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total
}

console.time("a")
console.log(addUpTo(100000000));
console.timeEnd("a")

function addUpToV2(n) {
    // 수학 공식...
    return n * (n + 1) / 2;
}
console.time("b")
console.log(addUpToV2(100000000));
console.timeEnd("b")

function countUpAndDown(n) {
    // for loop
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }

    for (let i = n; i >= 0; i--) {
        console.log(i)
    }
}

console.time("c")
countUpAndDown(100);
console.timeEnd("c")

function printAllPairs(n) {
    for(let i =0; i< n; i ++){
        for (let j = 0; j<n; j++) {
            consoe.log(i, j)
        }
    }
}

function logAtLeast5(n) {
    for (let i = 1; i<= Math.min(5, n); i++){
        console.log(i)
    }
}

function sum(arr) {
    let total = 0;
    for(let i =0; i< arr.length; i++){
        total += arr [i];
    }
    return total
}

function double(arr) {
    let newArr = [];
    for (let i = 0 ; i< arr.length ; i++){
        newArr.push(2 * arr[i]);
    }

    return newArr
}