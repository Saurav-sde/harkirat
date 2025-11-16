interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
}

// interface UpdateProps {
//     name: string,
//     age: number,
//     password: string
// }

// now here the issue is if we have to change the age to string then we have to change it to both the places, which is not good as we may miss this somewhere if we have to change that at multiple places



type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// Partial makes all properties of a type optional, creating a type with the same properties but each marked as optional

type UpdatePropsOptional = Partial<UpdateProps>


function updateUser(updateProps: UpdateProps) {
    // hit the db to update the user
}


// readOnly : used to make properties of an object immutable
type Person1 = {
    readonly name: string,
    readonly age: number
}

const obj1 : Person1 = {
    name: "John",
    age: 25,
}

// other way
type Person2 = {
    name: string,
    age: number
}

const obj2 : Readonly<Person2> = {
    name: "John",
    age: 25,
}
// now we can't change the values of obj1 , obj2 age and name



// records and map
type User3 = {
    id: string,
    username: string
}

// type Users3 = {
//     [key: string]: User3
// }

type Users3 = Record<string, User3> // gives us cleaner code

const users: Users3 = {
    "rras@hajk": {
        id: "rahdjkahe",
        username: "Harkirat"
    },
    "hjfskhfd": {
        id: "jdaklsj",
        username: "Saurav"
    }
}

const users4 = new Map<string, User3>() 
users4.set("hrajks", {id:"asdasf", username:"Saurav"});
users4.set("hjdks", {id:"asjdfklojf", username: "harkirat"});

const u = users4.get("asdasf")
console.log(u);


// exclude: in a function that can accept several types of inputs but you want to exclude specific types from being paased to it
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent  = (event: ExcludeEvent) : void => {
    console.log(`Handling event: ${event}`)
};

handleEvent('click');
handleEvent('mousemove');