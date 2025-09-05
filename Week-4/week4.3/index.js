// creating an http server
const express = require('express');
const app = express();
app.use(express.json());

const users = [{
    name: "Saurav",
    kidneys: [
        {healthy: false},{healthy: true}
    ]    
}]

app.get("/:name", function(req,res){
    const userName = req.params.name;
    const user = users.find(user => user.name === userName);
    if(user)
    {
        const numberOfKidneys = user.kidneys.length;
        const numberOfHealthyKidneys = user.kidneys.filter(kid => kid.healthy === true).length;
        const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
        return res.json({
            numberOfKidneys,
            numberOfHealthyKidneys,
            numberOfUnhealthyKidneys
        });
    }
    res.send("User not found");
})

app.post("/:name", function(req,res){
    const userName = req.params.name;
    const {healthy} = req.body;
    const user = users.find(user => user.name === userName);
    if(!user)
        return res.send("User not found");

    if(user?.kidneys.length < 2) {
        user?.kidneys.push({healthy:healthy});
        return res.json({msg:"done"});
    }
    else
        return res.send("User has already 2 kidneys");
})

app.put("/:name", function(req,res){
    const userName = req.params.name;
    const {kidneys:userKidney} = req.body;
    const user = users.find(user => user.name === userName);
    if(!user)
        return res.send("User not found");
    else {
        user.kidneys[0].healthy = userKidney[0].healthy;
        user.kidneys[1].healthy = userKidney[1].healthy;
        res.send(user.kidneys);
    }
})

app.delete("/:name", function(req,res){
    // only if atleast 1 unhealthy kidney is there do this, else return 411
    const userName = req.params.name;
    const user = users.find(user => user.name === userName);
    if(!user)
       return res.send("User not found");

    let atleastOneUnhealthyKidney = false;
    for(let i=0;i<user.kidneys.length;i++) {
        if(!user.kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
            break;
        }
    }

    if(!atleastOneUnhealthyKidney)
        return res.status(411).json({msg: "you have no unhealthy kidneys"});

    user.kidneys = user?.kidneys.filter(kid => kid.healthy === true);
    res.json({msg: "done"});
})

app.listen(3000);