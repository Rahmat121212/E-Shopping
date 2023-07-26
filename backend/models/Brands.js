const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
}
,
  { timestamps: true });

module.exports= mongoose.model("brand", brandSchema);


