const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

const adminMiddleware = async (req,res,next) => {
    try {
        const {token} = req.cookies;
        if(!token)
            throw new Error('token is not present');

        // verify the token
        const payload = jwt.verify(token, process.env.JWT_KEY);
        const {id, role} = payload;
        if(!id || !role)
            throw new Error("token is invalid");

        if(role != 'admin')
            throw new Error("you are not an admin");

        // find the admin in the db
        const admin = Admin.findById(id);
        if(!admin)
            throw new Error("admin doesn't exists");

        req.user = admin;
        next();
    } catch (err) {
        res.status(500).json({msg: "error: " + err, status:false});
    }

}

module.exports = adminMiddleware;