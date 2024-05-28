// function func () {}
//
// console.log(func.name); // func
//
// func.name = "hello";
// console.log(func.name); // func
//
//
// Reflect.defineProperty(func, "name", { writable: true })
// func.name = "what"
// console.log(func.name) // 'what'
//
// console.log(Reflect.getOwnPropertyDescriptor(func, "name"))



let title, hello;
const obj = {titl: "title2", hello: "hello2"};

({titl, hello} = obj);
const test = ({titl, hello} = obj);
console.log(titl, hello)

// console.log(test, "test")
// console.log(({titl, hello} = obj))

console.log(title, "title")
console.log(titl, "titl")


const wow = titl;
console.log(wow, "wow")