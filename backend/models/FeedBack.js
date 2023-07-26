const mongoose = require("mongoose");

const feedBackSchema =new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    subject: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    },
   
}, { timestamps: true });

const feedbackModel = new mongoose.model("feedback", feedBackSchema);
module.exports = feedbackModel;