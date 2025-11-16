
// interface User {
//     name : string,
//     age: number
// }

// type User1 = {
//     name : string,
//     age : number
// }

// function isLegal(user: User1) : boolean {
//     if(user.age > 18)
//         return true;
//     return false;
// }



// unions and intersection :- thuis is done in types but not in interface
type Employee = {
    name : string;
    startDate: string;
}

type Manager = {
    name: string;
    department: string
}


type TeamLead = Employee & Manager; // TeamLead has all the properties of both Manager and Employee

let e : Employee = {
    name: "Saurav",
    startDate: "01-02-2004"
}

let m : Manager = {
    name: "Harkirat",
    department: "Electricity"
}

let t : TeamLead = {
    name: "Saurav",
    startDate: "03-04-2010",
    department: ""
}



type GoodUser = {
    name: string,
    gift: string
}

type BadUser = {
    name: string,
    ip: string
}

type User = GoodUser | BadUser; // the User is either the GoodUser or the BadUser or the both 
