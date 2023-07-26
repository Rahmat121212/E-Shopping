const mongoose = require("mongoose");

const UserSchema =new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    admin: {
        required: true,
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const UserModel = new mongoose.model("user", UserSchema);
module.exports = UserModel;