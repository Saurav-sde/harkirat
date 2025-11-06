const mongoose = require('mongoose');
const {Schema} = mongoose;

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 40,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minLength:5,
        maxLength: 100
    },
    userEnrolled: {
        type:[{
            type: Schema.Types.ObjectId,
            ref: 'user'
        }]
    }
})

const Course = mongoose.model('course', courseSchema);
module.exports = Course;