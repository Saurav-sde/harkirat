// create two types called User and Admin,
// create a function that takes either a user oe an Admin as an input, and returns a string saying "welcome, [name]"


interface User {
    name: string,
    age: number
}

interface Admin {
    name : string,
    permission: string
}

type UserOrAdmin = User | Admin;

function greet (t : UserOrAdmin) : string {
    return "Hi " + t.name;  // here we can't use age and permission
}

