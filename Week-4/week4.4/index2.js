// uses middleware instead of normal function like in index.js
const express = require('express');
const app = express();

app.use(express.json());
// app.use(isOldEnoughMiddleware) // it only triggers for the route which is below this 

function isOldEnoughMiddleware(req,res,next){
    if(req.query.age >= 14) {
        next();
    } else {
        res.status(411).json({
            msg:"Sorry you are not of age yet."
        })
    }
}

app.get('/ride1', isOldEnoughMiddleware, function(req,res){
    res.json({
        msg:"You have successfully riden the ride 1"
    })
})

app.get('/ride2', isOldEnoughMiddleware, function(req,res){
    res.json({
        msg: "You have successfully riden the ride 2"
    })
})

app.listen(3000, ()=>{
    console.log("Server is listening");
})