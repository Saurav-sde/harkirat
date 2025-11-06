const express = require('express');
const courseRouter = express.Router();
const {purchaseCourse, getCourse, createCourse, deleteCourse, updateCourse, getAllCourses} = require("../controllers/course");
const userMiddleware = require('../middlewares/userMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

courseRouter.post('/create', adminMiddleware, createCourse);
courseRouter.post('/purchase',userMiddleware, purchaseCourse);
courseRouter.get('/:courseId',userMiddleware, getCourse);
courseRouter.delete('/:courseId', adminMiddleware, deleteCourse);
courseRouter.put('/:courseId', adminMiddleware, updateCourse);
courseRouter.get('/', userMiddleware, getAllCourses);

module.exports = courseRouter;