const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
const courseRouter = require('./routes/courseRouter');
const adminRouter = require('./routes/adminRouter');
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(cookieParser());

app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/admin', adminRouter);


const IntialiseConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
        app.listen(3000, ()=>{
            console.log("server is listening at port 3000");
        })
    } catch (err) {
        console.log("Error Occured: " + err);
    }
}
IntialiseConnection();