// n명이 참가
// 1 vs 2, 3 vs 4, n-1 vs n
// 1 vs 2 승리자가 1번을 부여 받음
// a번 참가자와 b번 참가자는 언제 붙게 될까?
// 항상 이긴다고 가정하기
function solution(n, a, b){
    // 이기면 짝수 싸움으로 감
    let count = 0;
    while (true){
        if(a % 2 === 1) {
            a = Math.floor(((a + 1) / 2))
        } else {
            a = a / 2
        }
        if(b % 2 === 1) {
            b = Math.floor(((b + 1) / 2))
        } else {
            b = b / 2
        }
        count++
        if(a === b) break;
    }

    return count
}