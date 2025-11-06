const express = require('express');
const adminRouter = express.Router();
const adminMiddleware = require("../middlewares/adminMiddleware");
const {signup, login, logout} = require('../controllers/admin');

adminRouter.post('/signup', adminMiddleware, signup);
adminRouter.post('/login', login);
adminRouter.post('/logout', adminMiddleware, logout);

module.exports = adminRouter;