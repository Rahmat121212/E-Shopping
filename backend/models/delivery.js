const mongoose = require("mongoose");

const DeliverySchema =new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    contact: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    }
}, { timestamps: true });

const DeliveryModel = new mongoose.model("deliveryBoy", DeliverySchema);
module.exports = DeliveryModel;