"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1;
console.log(x);
function greet(name) {
    console.log("Hello " + name);
}
greet("Saurav");
const sum = (a, b) => a + b;
console.log(sum(3, 4));
const isLegal = (age) => age > 18;
console.log(isLegal(23));
const delayedCalls = (fn) => {
    setTimeout(fn, 1000);
};
delayedCalls(() => {
    console.log("hi there");
});
//# sourceMappingURL=index.js.map