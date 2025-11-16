
interface User {
    name: string,
    age: number
}


type UserType = {
    name: string,
    age: number
}

let user : UserType = {
    name: "Saurav",
    age:21
}

// we can do union in type
type SumInput = string | number;

function sum(a : SumInput,b : SumInput) : SumInput {
    return a as any + b as any;
}

// we can do intersection here
interface Manager {
    name: string,
    age: number
}

interface Employee {
    name: string,
    department: string
}

type TeamLead = Manager & Employee 

let t: TeamLead = {
    name: "Saurav",
    age: 21,
    department: "marketing"
}