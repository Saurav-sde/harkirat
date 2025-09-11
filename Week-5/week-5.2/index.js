const express = require('express');
const app = express();

// logs the method. url and timestamp in the console after every request
function middleware(req,res,next){
    console.log("Method is " + req.method);
    console.log("Host is " + req.hostname);
    console.log("Route is " + req.url);
    console.log(new Date());
    next();
}
app.use(middleware);

app.get('/multiply', (req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({"res" : a*b});
})

app.get('/add', (req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({"res" : a+b});
})

app.get('/divide', (req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({"res" : a/b});
})

app.get('/subtract', (req,res)=>{
    const a = parseInt(req.query.a);;
    const b = parseInt(req.query.b);;
    res.json({"res" : a-b});
})

app.listen(3000);
