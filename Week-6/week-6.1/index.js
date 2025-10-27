const express = require('express');
const app = express();
app.use(express.json());

const users = [];

// returns a random long string
function generateToken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post('/signup',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    // we can do checks here  
    if(users.find(u => u.username === username)) {
        res.json({
            message: "you are already registerd . please sign in to continue"
        })
        return;
    }

    if(username.length < 5) {
        res.json({
            message: "username length is too small"
        })
        return;
    }

    if(password.length < 5) {
        res.json({
            message: "password length is too small"
        })
        return;
    }

    // later we will learn about input validation using zod
    users.push({
        username: username,
        password: password,
    })

    res.json({
        msg: "you are signed up" 
    })
})

app.post('/signin',(req,res)=>{
    const {username, password} = req.body;
    const foundUser = users.find(u => u.username === username && u.password === password);
    if(foundUser) {
        const token = generateToken();
        foundUser.token = token;
        res.status(202).json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Invalid username or password"
        })
    }
})

app.get("/me", (req,res) => {
    const token = req.headers.token;
    const foundUser = users.find(u => u.token === token);
    if(foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.json({
            message: "token invalid"
        })
    }
})

app.listen(3000);