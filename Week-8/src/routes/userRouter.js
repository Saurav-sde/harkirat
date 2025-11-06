const express = require('express');
const userRouter = express.Router();
const {signup, login, logout} = require('../controllers/user');

userRouter.post('/signup', signup);
userRouter.post('/signin', login);
userRouter.post('/logout', logout);

module.exports = userRouter;