const express = require('express');
const app = express();
const port = 3000;

let todos = [];

app.use(express.json()); // body parser

// route handlers
app.post('/todo', (req,res) => {
    const {title, id} = req.body;
    todos.push({title, id});
    res.send("Todo added successfully");
})

app.delete('/todo/:id', (req,res)=>{
    const id = req.params.id;
    todos = todos.filter(obj => obj.id !== id);   
    res.send("Task deleted successfully");
})

app.put('/todo', (req,res)=>{
    const {title, id} = req.body;
    let task = todos.find(todo => todo.id === id);
    if(task)
    {
        task.title = title;
        res.send("Task updated successfully");
    }
    else
        res.send("Task not found");
})

app.get('/todo', (req,res)=>{
    res.send(todos);
})

app.listen(port,()=>{
    console.log("app is listening");
})