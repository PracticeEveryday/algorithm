let instructor = {
    firstName: "kim",
    isInstructor: true,
    favorateNumbers: [1, 2, 3, 4]
}


charCount("aaaa");
// {a: 4}

charCount("hello");
// {h: 1, e: 1, l: 2, o: 1}
function charCount(str) {
    // 할 일
    // 전달받은 문자열에서 사용된 문자의 개수를 객체의 형태로 반환해라
    // 모두 소문자로 변환하고 숫자 개수도 출력하라
}

function charCount(str) {
    // 객체를 만들고 반환한다.
    // string을 반복한다.
        // 객체 키에 char이 숫자 또는 문자라면 있다면 1을 더한다.
        // char이 숫자 또는 문자이고 키가 없다면 char를 키로 1을 세팅한다.
        // 만약 char이 공백, 특수문자 등등이라면 제외한다.

    // 객체를 반환한다.
}


// function charCount(str) {
//     let result = {};
//     for (let i = 0 ; i< str.length; i++) {
//         let char = str[i].toLowerCase();
//         if(result[char] > 0) {
//             // 객체 키에 char이 숫자 또는 문자라면 있다면 1을 더한다.
//             result[char]++;
//         } else {
//             // char이 숫자 또는 문자이고 키가 없다면 char를 키로 1을 세팅한다.
//             result[char] = 1;
//         }
//     }
//     return result
// }

function charCount(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            if(obj[char] > 0) {
                obj[char]++;
            }else {
                obj[char] = 1;
            }
        }
    }
    return obj
}



console.log(charCount("Hell!132!%^ooOO"))