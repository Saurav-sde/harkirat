const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Admin = require('../models/admin');

const userMiddleware = async (req,res, next) => {
    try {
        const {token} = req.cookies;
        if(!token)
            throw new Error("Token is not present");

        // verify the token
        const payload = jwt.verify(token, process.env.JWT_KEY);
        const {id, role} = payload;
        if(!id)
            throw new Error("Invalid Token");

        // find the user in the DB
        let user ;
        role === "admin" ? user = await Admin.findById(id) : user = await User.findById(id);

        if(!user)
            throw new Error("user doesn't exists");

        req.user = user;
        next();

    } catch (err) {
        res.status(500).json({msg: "error: " + err, status:false});
    }
}

module.exports = userMiddleware;