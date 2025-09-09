const express = require('express');
const app = express();

let requestCount = 0;
app.use(function(req,res,next){
    requestCount++;
    next();  
})

app.post('/user', function(req,res){
    res.status(200).json({msg: "Created dummy user"});
})

app.get('/user', function(req,res){
    res.status(200).json({name:"John"});
})

app.get('/requestCount', function(req,res){
    res.status(200).json({requestCount});
})

app.listen(4000, function(){
    console.log("Server is listening at port 4000");
})