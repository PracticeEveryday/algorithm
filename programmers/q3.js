// 짝지어 제거하기
// 알파벳 소문자로 이루어진 문자열을 가지고 시작한다.
// 같은 알파벳이 2개 붙어있는 짝을 찾는다.
// 제거 한 뒤 앞뒤로 이어 붙인다.
//성공 시 1 아닐 경우 0


// function solution(str) {
//     if(str.length < 1) return 0;
//     if(str.length === 2 && str[0] === str[1]) return 1
//     let isMatch = true;
//     while (str.length > 1) {
//         let isTeam = false
//
//         for(let i = 0; i < str.length - 1; i++) {
//             if(str[i] === str[i+1]) {
//                 isTeam = true;
//                 str = str.slice(0, i) + str.slice(i+2);
//             }
//             if(i === str.length - 2 && isTeam === false) {
//                 return 0
//             }
//         }
//     }
//     return isMatch === true ? 1 : 0;
// }


function solution (str) {
    if(str.length <= 1) return 0;
    const stack = [];
    for(let i = 0 ; i < str.length; i++) {
        if(stack[stack.length - 1] === str[i]) {
            stack.pop();
        } else {
            stack.push(str[i])
        }
    }
    return stack.length === 0 ? 1 : 0;
}

console.log(solution('a'))// 0
console.log(solution('baabaa'))// 1
console.log(solution('babaa')) // 0
console.log(solution('abbaaccbba')) // 1
console.log(solution('cdcdee')) // 0
console.log(solution('aaaa')) // 1
console.log(solution('abccba')) // 1
