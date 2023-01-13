const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Why No Name']
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default:'active'
    },
    role:{
        type:String,
        required:true
    },
    lastLogin:{
        type:String,
        required:true
    }
})

const userData = mongoose.model('USER', userSchema);

module.exports = userData;