// 다음 큰 숫자를 구하라.
// https://school.programmers.co.kr/learn/courses/30/lessons/12911 L2
// 조건1 다음 큰 숫자는 n보다 큰 자연수이다.
// 조건2 n의 다음 큰 숫자와 n을 2진수로 변환했을 때 1의 갯수가 같다.
// 조건3 n의 다음 큰 숫자는 1, 2를 만족하는 가장 작은 수이다.

// 78(1001110) 의 다음 큰 숫자는 83(1010011)이다.

// 78 -> 83
// 15 -> 23

function solution(num) {
    const numBinary = toBinary(num);
    // 1의 개수 구함.
    let oneCount = getOneCount(0, numBinary);

    let nextNum = 0;
    let i = num + 1
    while (!nextNum) {
        let iBinary = toBinary(i);
        let iOneCount = getOneCount(0, iBinary);
        if(iOneCount === oneCount) nextNum = i;
        i++;
    }
    return nextNum;
}

function toBinary(num) {
    return num.toString(2);
}

function getOneCount (oneCount, binary) {
    for(let i = 0; i < binary.length; i++) {
        if(binary[i] === '1')  oneCount++
    }

    return oneCount
}
solution(78) // 83
solution(15) // 23