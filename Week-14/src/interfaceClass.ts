interface Person {
    name: string,
    age: number,
    greet : () => string
    // greet(): string
}

// using interface we can create a normal object or class
// normal objext
// let person: Person = {
//     name: "Saurav",
//     age: 21,
//     // greet() {
//     //     return `HI ${this.name}`
//     // },
//     greet: () => `HI ${person.name}`
// } 

// console.log(person, person.greet());

// class
class Manager implements Person {
    name: string;
    age: number;

    // we can add some extra members
    constructor(name: string, age:number) {
        this.name = name
        this.age = age
    }

    greet = () : string => `Hi ${this.name}`
} 


let user = new Manager("John", 30);
console.log(user, user.greet());


// abstract class vs interface
abstract class USER {
    name:string;
    constructor(name: string) {
        this.name = name
    }

    abstract greet(): string;
    // in abstract class we can have methods with default implementation , but in interface we can't do default implementation
    hello() {
        console.log("hi there!");
    }
}

class Employee extends USER {
    name: string;
    constructor(name: string) {
        super(name);
        this.name = name;
    }

    greet(): string {
        return "hi " + this.name
    }
}