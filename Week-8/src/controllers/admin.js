const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req,res) => {
    try {
        let {emailId, password} = req.body;
        if(!emailId)
            throw new Error("email is missing");
        if(!password)
            throw new Error("password is missing");
        password = await bcrypt.hash(password, 10);
        const admin = await Admin.create({emailId, password});
        if(!admin)
            throw new Error("Failed to create a new admin");
        res.status(201).json({msg: "admin registered successfully", data:admin, status:true});
    } catch (err) {
        res.status(400).json({msg: "error: " + err, status: false});
    }
}

const login = async (req,res) => {
    try {
        const {emailId, password} = req.body;
        if(!emailId || !password)
            throw new Error("some ceredentials is missing");

        // get the admin
        const admin = await Admin.findOne({emailId});
        if(!admin)
            throw new Error("admin doesn't exists");

        // match password
        const isPassMatch = await bcrypt.compare(password, admin.password);
        if(!isPassMatch)
            throw new Error("invalid ceredentials");

        // assign the token
        const token = jwt.sign({id: admin._id, emailId, role:"admin"}, process.env.JWT_KEY, {expiresIn: 3600});
        res.cookie('token', token, {maxAge: 60 * 60 * 1000});
        res.status(201).json({msg:"admin loggedin successfully", data: token, status: true});
    } catch (err) {
        res.status(400).json({msg: "error: " + err, status:false});
    }
}

const logout = async (req,res) => {
    
}

module.exports = {signup, login, logout};