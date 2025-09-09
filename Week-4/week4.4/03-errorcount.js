const express = require('express');
const app = express();

let errorCount = 0;
app.get('/user', function(req,res){
    throw new Error("Some error");
    res.status(200).json({name:"John"});
})

app.post('/user', function(req,res){
    res.status(200).json({msg:"Created dummy user"});
})

app.get('/errorCount', function(req,res){
    res.status(200).json({errorCount});
})

// error handling middleware :- must define at the end of the application
app.use(function(err,req,res,next){
    res.status(404).json({})
    errorCount++;
})

app.listen(3000);