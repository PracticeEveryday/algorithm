// 2명씩 밖에 못타고 무게 제한 있음.
// peaple -> 사람의 몸무게 배열
// limit -> 무게 제한
// 구명보트를 최대한 적게 사용하여 사람들을 구출하려고 한다.
function solution(people, limit) {
    let answer =0;
    people.sort ((a,b) => b-a)
    for (let i=0, j= people.length - 1; i <= j ; i++ ) {
        if (people[i] + people [j] <= limit ) j--

        answer++
    }
    return answer;
}

console.log(solution([70, 50, 80, 50], 100))
console.log(solution([70, 80, 50], 100))