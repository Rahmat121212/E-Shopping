const mongoose = require("mongoose");

const customerSchema =new mongoose.Schema({
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
    }
}, { timestamps: true });

const CustomerModel = new mongoose.model("customer", customerSchema);
module.exports = CustomerModel;