/*
function getMax(num: number[]) : number {
    let maxValue = -100000000;

    for(let i=0;i<num.length;i++) {
        if(num[i] > maxValue) {
            maxValue = num[i];
        }
    }

    return maxValue;
}
*/

interface Address {
    city: string;
    pincode: number;
}

interface User {
    name: String,
    age: number,
    addresses?: Address[]
}


function filterUser(user: User[]) : User[] {
    return user.filter((u) => u.age > 18)
}

const users: User[] = [{name:"Saurav", age: 10}, {name:"Gaurav", age:27}, {name:"Satyam", age:21}, {name: "Harsh", age:17}];

const legalUser = filterUser(users);
console.log(legalUser);