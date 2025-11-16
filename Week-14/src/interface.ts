

/*
function greet(user : {
    name: string,
    age: number
}) {
    console.log("Hello " + user.name);
}

let user = {
    name: "Saurav",
    age: 21
}

greet(user)
*/


// Defining interface
/*
interface userType {
    firstName: string,
    lastName: string,
    age: number
}

function greet(user : userType) : void {
    console.log("Hello " + user.firstName);
}

function isLegal(user : userType) : boolean {
    if(user.age > 18)
        return true;
    return false;
}

let user : userType = {
    firstName: "Saurav",
    lastName: "Kumar",
    age: 21
}

greet(user);
console.log(isLegal(user));



// creating a react component
interface TodoType {
    title: string,
    description: string,
    done: boolean
}

interface TodoInput {
    todo: TodoType
}


function Todo({ todo }: TodoInput) {

}
*/



// 14.2
/*
interface User {
    name: string,
    age: number,
    address?: { // optional field
        city: string,
        country: string,
        pincode: number
    }
}

let user : User = {
    name: "Saurav",
    age: 21,
    address: {
        city: "Sheikhpura",
        country: "India",
        pincode: 811105
    }
}

let user2: User = {
    name: "Rahul Tripathi",
    age:17
}

const isLegal = (user: User) : boolean =>  user.age >= 18
const ans : boolean = isLegal(user);
if(ans)
    console.log("I am legal");
else
    console.log("I am not legal");
    
// now i want that address should be optional , write ? there
*/


// one interface can use other interface, interfaces using other interfaces

interface Address {
    city: string,
    country: string,
    pincode: number,
    houseNumber: string
}

interface User {
    name: string,
    age: number,
    // address: { 
    //     city: string,
    //     country: string,
    //     pincode: number
    // }
    address: Address
}

// here, we are repeating ourselves, and we know the rule that don't repeat yourself
interface Office {
    // address: { 
    //     city: string,
    //     country: string,
    //     pincode: number
    // }
    address: Address
}

