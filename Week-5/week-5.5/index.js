// axios vs fetch 

// using fetch
/*
function main() {
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async response => {
        const json = await response.json();
        console.log(json.todos);
    })
}

// send get req
async function main() {
    const response = await fetch("https://sum-server.100xdevs.com/todos")
    const json = await response.json();
    console.log(json.todos);
}
    

// send post,put,delete req
async function main() {
    const response = await fetch("https://sum-server.100xdevs.com/todos".{
        method: "POST",
        body: {
            username: "saurav",
            password: "fkjskfjsei"
        },
        headers: {
            authorization: "Bearer123"
        }
    })
    const json = await response.json();
    console.log(json.todos);
}


main();
*/


// axios
// in get there is no body so, 1st parameter is url and 2nd is headers
const axios = require('axios');
async function main() {
    const response = await axios.get("https://sum-server.100xdevs.com/todos");
    console.log(response.data.todos);
}


//parameters sequenece:-  URL, BODY, HEADERS
async function main() {
    const response = await axios.post("https://sum-server.100xdevs.com/todos",{
        username: "saurav",
        password: "bajfakhfafk"
    }, {
        headers: {
            Authorization: "Bearer 123"
        }
    });
    console.log(response.data.todos);
}

// other way to write axios 
async function main2() {
    const response = await axios(
        {
            url: "https://sum-server.100xdevs.com/todos",
            method: "POST",
            headers: {
                Authorization: "Bearer 123"
            },
            data: {
                username:"Saurav"
            }
        }
    )
    console.log(response.data);
}