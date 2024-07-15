// const target = { a: "a", b: "b" };
//
// const proxy = new Proxy(target, {
//     get: function(target, property, receiver) {
//         console.log("Target object:", target);
//         console.log("Property accessed:", property);
//         console.log("Receiver:", receiver);
//         return target[property];
//     }
// });
//
// console.log("Proxy a:", proxy.a); // "a" 출력 및 로그
// console.log("Target a:", target.a); // "a" 출력 및 로그

//
// let book = {
//     _title: "JavaScript",
//
//     // getter 함수
//     get title() {
//         return this._title;
//     },
//
//     // setter 함수
//     set title(newTitle) {
//         if (typeof newTitle === 'string' && newTitle.length > 0) {
//             this._title = newTitle;
//         } else {
//             console.log("Invalid title");
//         }
//     }
// };
//
// console.log(book.title); // JavaScript
// book.title = "";    // Invalid title


let person = {};

Object.defineProperty(person, 'name', {
    value: '김동현',
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(person.name); // "김동현"

person.name = '김동현22'; // 값 변경
console.log(person.name); // "Bob"

for (const personKey in person) {
    console.log(personKey); // 'name'
}

Object.defineProperty(person, 'age', {
    value: 11,
    writable: true,
    enumerable: false,
    configurable: true
});

for (const personKey in person) {
    console.log(personKey); // 'name'
}

Object.defineProperty(person, 'address', {
    value: "망원동",
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(Object.keys(person)); // ['name', 'address']

Object.defineProperty(person, 'hidden', {
    configurable: false // 변경 불가능하게 설정
});

// 다음 코드는 오류를 발생시킵니다.
// TypeError: Cannot redefine property: hidden
Object.defineProperty(person, 'hidden', { enumerable: true });
