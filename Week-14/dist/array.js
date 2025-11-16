"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterUser(user) {
    return user.filter((u) => u.age > 18);
}
const users = [{ name: "Saurav", age: 10 }, { name: "Gaurav", age: 27 }, { name: "Satyam", age: 21 }, { name: "Harsh", age: 17 }];
const legalUser = filterUser(users);
console.log(legalUser);
//# sourceMappingURL=array.js.map