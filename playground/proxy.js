const target = { a: "a", b: "b" };

const proxy = new Proxy(target, {
    get: function(target, property, receiver) {
        console.log("Target object:", target);
        console.log("Property accessed:", property);
        console.log("Receiver:", receiver);
        return target[property];
    }
});

console.log("Proxy a:", proxy.a); // "a" 출력 및 로그
console.log("Target a:", target.a); // "a" 출력 및 로그
