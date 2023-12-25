// https://school.programmers.co.kr/learn/courses/30/lessons/12980

// 00 연구소는 한번에 K 앞으로 점프하거나
// 현재 온 거리 * 2의 위치로 이동할 수 있는 아이언 슈트 있음.
// 건전지로 작동하는 데 순간이동을 하면 건전지 들지 않는다.
// k앞으로 점프하면 K만큼 거전지 사용량이 든다.
// n만큼 떨어진 곳으로 가려고 한다.
// 건전지 사용량을 최소화 하는 방법

function solution(n) {
    // 사용량
    let usage = 0;



    while(![0, 1].includes(n)) {
        // 홀수이면
        if(n % 2 === 1) {
            n = n - 1;
            usage++;
        }
        n = n / 2;
    }
    return ++usage
}