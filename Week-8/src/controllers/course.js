const Course = require("../models/course");
const User = require("../models/User");

// some fixes i have to do: 
// admin is not able to purchase it
const purchaseCourse = async (req,res) => {
    try {
        const {courseId} = req.body;
        if(!courseId)
            throw new Error("course id is missing");

        // get the course from the DB and update userEnrolled field
        const course = await Course.findByIdAndUpdate(courseId, {$addToSet: {userEnrolled: req.user._id}}, {new: true});
        if(!course)
            throw new Error("course doesn't exists");

        // update enrolledCourses field in user Schema
        const user = await User.findByIdAndUpdate(req.user._id, {$addToSet: {enrolledCourses: course._id}}, {new: true});
        if(!user)
            throw new Error("user doesn't exists");

        res.status(201).json({msg: "course purchased successfully", data:{coursesEnrolled: user.enrolledCourses}, status: true});
    } catch (err) {
        res.status(400).json({msg: "error: " + err, status: false});
    }
}

const getCourse = async (req,res) => {
    try {
        const {courseId} = req.params;
        if(!courseId)
            throw new Error("course id is missing");
        const course = await Course.findById(courseId);
        if(!course)
            throw new Error("course not found");
        res.status(200).json({msg:"course fetched successfully", data:course, status: true});
    } catch (err) {
        res.status(400).json({msg: "error: " + err, status: false});
    }
}

const createCourse = async (req,res) => {
    try {
        const {title, description} = req.body;
        if(!title)
            throw new Error("course title is missing");
        if(!description)
            throw new Error("course desciption is missing");
        const course = await Course.create({title, description});
        if(!course)
            throw new Error("course creation failed");
        res.status(201).json({msg: "course created successfully", data:course, status:true});
    } catch (err) {
        res.status(400).json({msg: "error: " + err, status:false});
    }
}

const deleteCourse = async(req,res) => {
    try {
        const {courseId} = req.params;
        if(!courseId)
            throw new Error("course id is missing");
        const deletedCourse = await Course.findByIdAndDelete(courseId);
        if(!deletedCourse)
            throw new Error("course not found");
        
        // remove this coiurse from enrolledCourses of evry user
        const updateResult = await User.updateMany({enrolledCourses: courseId},{$pull: {enrolledCourses: courseId}},{new: true});

        res.status(200).json({msg: "course deleted successfully and removed from enrolled users", data: {deletedCourse, usersUpdated: updateResult.modifiedCount}, status: true });
    } catch (err) {
        console.error("Error deleting course:", err);
        res.status(400).json({msg: "error: " + err, status: false});
    }
}

const updateCourse = async (req,res) => {
    
}

const getAllCourses = async (req,res) => {
    try {
        const courses = await Course.find();
        if(!courses)
            throw new Error("Course not found");
        if(!courses.length)
            return res.status(200).json({msg:"There is not any course created yet", status:true});
        res.status(200).json({msg:"courses fetched successfully", data:courses, status:true});
    } catch (err) {
        res.status(400).json({msg: "error: " + err, status:false});
    }
}

module.exports = {purchaseCourse, getCourse, createCourse, deleteCourse, updateCourse, getAllCourses};