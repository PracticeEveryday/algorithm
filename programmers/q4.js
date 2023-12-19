// 갈색 격자수 brouwn, 노란색 격자수 yellow
// 카펫의 가로 세로 크기를 순서대로 배열에 담아 리턴
// Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

function solution(brown, yellow) {
    let total = brown + yellow;
    let 세로 = 1
    while(세로 <= Math.sqrt(total)) {
        if(total % 세로 === 0) {
            const 가로 = total / 세로
            if(2 * (세로 + 가로 - 2) === brown) break;
        }
        세로++
    }
    return [total / 세로, 세로]
}

console.log(solution(8, 1))// [3, 3]
console.log(solution(10, 2))// [4, 3]
console.log(solution(12, 4))// [4, 4]
console.log(solution(14, 6))// [5, 4]
console.log(solution(16, 9))// [5, 5]
console.log(solution(24, 24))// [8, 6]
