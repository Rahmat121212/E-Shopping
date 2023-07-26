const mongoose = require("mongoose");
const nSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("n", nSchema);
