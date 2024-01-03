// const fs = require("fs")
// const test = cb => cb(null, "wow")
//
// const testFuc = (fn) => {
//     fs.readFile('./tests.txt', function (err, file) {
//         console.log(err, "error") // null
//         console.log(file)
//     })
// }


function useCallback(cb) {
    setTimeout(() => {
        try {
            const random = Math.random();
            if (random < 0.5) {
                throw new Error("에러입니다.");
            }
            cb(null, random);
        } catch (error) {
            cb(error);
        }
    }, 1000);
}

// useCallback((err, res) => {
//     if (err) {
//         console.error("Error: ", err);
//     } else {
//         console.log("Result: ", res);
//     }
// });

useCallback((result) => {
    console.log(result)
});