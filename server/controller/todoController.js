const userModel = require("../models/todoModel");

const todoCreate = async (req, res) => {
  const data = new userModel({
    todo: req.body.todo,
    isCompleted: req.body.isCompleted,
  });
  await data.save();
  res.json({
    success: true,
    message: "Data created successfully",
    data,
  });
};

const todoUpdate = async (req, res) => {
  const { id, ...rest } = req.body;
  const dat = await userModel.updateOne({ _id: id }, rest);
  const data = await userModel.find().sort({ createdAt: -1 });
  console.log(data, "todos");
  res.json({ success: true, message: "Data updated successfully", data });
};

const todoDelete = async (req, res) => {
  const { id } = req.body;
  await userModel.deleteOne({ _id: id });
  // const data = await userModel.find().sort({ createdAt: -1 });
  res.json({ success: true, message: "Data deleted successfully" });
};

const todoFind = async (req, res) => {
  // const { id } = req.body;

  const data = await userModel.find().sort({ createdAt: -1 });

  console.log(data);
  res.json(data);
};
module.exports = { todoCreate, todoUpdate, todoDelete, todoFind };
