//https://school.programmers.co.kr/learn/courses/30/lessons/12981

// n명이 끝말잇기 중
//1 -> n -> 1번 순
// n과 끝말잇기에서 언제 끝나는지 번호를 구하라
// [번호, 차례] -> [3, 3] 3번 사람이 3번째 차례에 탈락이다.
// 탈락자가 없다면 [0, 0]
function solution(n, words) {
    const wordMap = {};

    for(let i = 0; i < words.length; i++) {
        // 누가
        let person = i % n;
        // 몇 번째
        let count = Math.floor(i / n) + 1
        // 무슨말
        let word = words[i];

        // 앞의 마지막 글자로 시작지 않으면 반환
        if(i >= 1 && words[i][0] !== words[i-1][words[i-1].length - 1]) {
            return [person + 1, count]
        }

        if(wordMap.hasOwnProperty(word)) {
            return [person + 1, count]
        } else {
            wordMap[word] = [person, 1]
        }
    }

    return [0, 0]
}