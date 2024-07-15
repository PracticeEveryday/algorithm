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


let book = {
    _title: "JavaScript",

    // getter 함수
    get title() {
        return this._title;
    },

    // setter 함수
    set title(newTitle) {
        if (typeof newTitle === 'string' && newTitle.length > 0) {
            this._title = newTitle;
        } else {
            console.log("Invalid title");
        }
    }
};

console.log(book.title); // JavaScript
book.title = "";    // Invalid title