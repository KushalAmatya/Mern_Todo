const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", todoSchema);
