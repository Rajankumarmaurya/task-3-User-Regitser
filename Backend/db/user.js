const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },


    phone: {
        type: String,
        required: true,
    },

});

const User = mongoose.model('Register', UserSchema)
module.exports = User