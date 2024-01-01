// arr이 주어 질 때 n개의 수들 중의 이 수들의 최소 공배수를 구하라
// 최소 공배수란 배수 중 공통이 되는 가장 작은 숫자이다.

function solution(arr) {
    // 공통으로 포함되는 약수와 각각의 서로소로 곱하기
    const divided = []
    for(const val of arr) {
        const divisosArr = findDivisors(val);
        // 공통만 빼내기
        divided.push(divisosArr);
    }
    const commonArr = findCommonElements(...divided)
    const larged = commonArr[commonArr.length - 1]

    const seoloso = arr.map((item) => item / larged)
    const set = new Set([...commonArr, ...seoloso])

    return [...set].reduce((a, b) => a * b)

}

function findCommonElements(...arrays) {
    if (arrays.length === 0) {
        return [];
    }
    const baseArray = arrays[0];
    return baseArray.filter(element => arrays.every(arr => arr.includes(element)));

}


function findDivisors(number) {
    let divisors = [];

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
}



console.log(solution([2, 6, 8, 14])) // 168
console.log(solution([1, 2, 3])) // 6