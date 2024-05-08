const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    todo: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", todoSchema);
