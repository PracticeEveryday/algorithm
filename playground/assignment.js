const arr = [1, 2, 3, 4, 5];

([a, b, ...c] = arr);

console.log(a, b, c);

// var a, b, c, d;
// const obj = {a: "a", b: "b", c: "c", d: "d"};
//
// ({a, b, ...c} = obj);
//
// console.log(a, b, c);