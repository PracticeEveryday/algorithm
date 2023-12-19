// N 번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수

function solution(num) {
    return fibonacci(num) % 1234567
}

function fibonacci (num) {
    if(num === 0) return 0;
    if(num === 1) return 1;

    return fibonacci(num-1) + fibonacci(num - 2)
}


console.log(solution(1)) // 2
console.log(solution(3)) // 2
console.log(solution(5)) // 5