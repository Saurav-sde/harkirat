const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 20,
        trim: true,
        lowercase:true
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    enrolledCourses: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'course'
        }]
    }
}, {timestamps: true});

const User = mongoose.model("user", userSchema);
module.exports = User;