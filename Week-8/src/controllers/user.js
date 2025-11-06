const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


const signup = async (req,res) => {
    console.log("In signup body");
    
    try {
        let {emailId, password} = req.body;
        if(!emailId)
            throw new Error("email Id is required");
        if(!password)
            throw new Error("password is required");

        password = await bcrypt.hash(password, 10);
        const user = await User.create({emailId, password});
        res.status(201).json({msg: "user created successfully", data: user, status: true});
    } catch (err) {
        res.status(400).json({msg: "error: " + err, status: false });
    }
}

const login = async (req,res) => {
    try {
        const {emailId, password} = req.body;
        if(!emailId || !password)
            throw new Error("Invalid ceredentials");
        const user = await User.findOne({emailId});
        const isPassMatch = await bcrypt.compare(password, user.password);
        if(!isPassMatch)
            throw new Error("Invalid ceredentials");

        // give the token
        const token = jwt.sign({id:user._id, emailId, role:'user'}, process.env.JWT_KEY, {expiresIn: 3600});
        res.cookie('token', token, {maxAge: 60 * 60 * 1000});
        res.status(201).json({msg: "user logged in successfully", data: user, status: true});
    } catch (err) {
        res.status(400).json({msg: "error: " + err, status: false });
    }
}

const logout = async (req,res) => {

}


module.exports = {signup, login, logout};