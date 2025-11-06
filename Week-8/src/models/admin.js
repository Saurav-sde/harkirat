const mongoose = require('mongoose');
const {Schema} = mongoose;

const adminSchema = new Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true
    },
    emailId: {
        type:String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true});

const Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;