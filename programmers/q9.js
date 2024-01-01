// arr이 주어 질 때 n개의 수들 중의 이 수들의 최소 공배수를 구하라
// 최소 공배수란 배수 중 공통이 되는 가장 작은 숫자이다.

function solution(arr) {
    let lastLcm = uclid(arr[0], arr[1]);
    for(let i = 1 ; i < arr.length; i++) {
        lastLcm = uclid(lastLcm, arr[i])
    }

    return lastLcm
}
function uclid(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return  lcm(num1, num2);
}


console.log(solution([2, 6, 8, 14])) // 168
console.log(solution([1, 2, 3])) // 6