const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    todo: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", todoSchema);
