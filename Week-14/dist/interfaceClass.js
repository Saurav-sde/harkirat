"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manager {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet = () => `Hi ${this.name}`;
}
let user = new Manager("John", 30);
console.log(user, user.greet());
class USER {
    name;
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log("hi there!");
    }
}
class Employee extends USER {
    name;
    constructor(name) {
        super(name);
        this.name = name;
    }
    greet() {
        return "hi " + this.name;
    }
}
//# sourceMappingURL=interfaceClass.js.map