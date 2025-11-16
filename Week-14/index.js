"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1; // type inferencing
// x = "Saurav" // error
console.log(x);
// a function that greets a user given their first name
function greet(name) {
    console.log("Hello " + name);
}
greet("Saurav");
// greet(123); // error as argument must be string
// define a function sum that takes 2 number as input and return the sum of it
const sum = (a, b) => a + b;
console.log(sum(3, 4));
// define a function that returns true or false based on if a user is 18+
const isLegal = (age) => age > 18;
console.log(isLegal(23));
// define a function that take another function as input, and runs it after 1 seconds
const delayedCalls = (fn) => {
    setTimeout(fn, 1000);
};
delayedCalls(() => {
    console.log("hi there");
});
//# sourceMappingURL=index.js.map