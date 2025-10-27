const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
const JWT_SECRET = "nkskfskkeksjdj";

const users = [];

function auth(req,res,next) {
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token,JWT_SECRET);
    const username = decodedInfo.username;
    if(!username)
        return res.json({msg:"You are not logged in"});

    req.username = username;
    next();
}

function logger(req,res,next){
    console.log(req.method + " request came");
    next();
}

app.use(logger);

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post('/signup',(req,res)=>{
    const {username,password} = req.body;
    if(!username || !password)
        return res.json({msg:"username or password required"});

    users.push({username,password});
    res.json({msg:"You are signed up"});
    console.log(users);
})

app.post('/signin',(req,res)=>{
    const {username,password} = req.body;
    
    const foundUser = users.find(u => (u.username === username && u.password === password));
    if(foundUser) {
        const token = jwt.sign({username},JWT_SECRET);
        return res.json({token});
    } else {
        return res.json({msg:"Invalid username or password"});
    }
})

app.get("/me", auth, (req,res) => {
    const foundUser = users.find(u => u.username === req.username);
    if(!foundUser)
        return res.json({msg:"You are not logged in"})
    return res.json(foundUser);
})

app.listen(3000);