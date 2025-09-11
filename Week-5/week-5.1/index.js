const express = require('express');
const app = express();

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
