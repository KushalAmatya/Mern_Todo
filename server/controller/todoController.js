const userModel = require("../models/todoModel");

const todoCreate = async (req, res) => {
  const data = new userModel({
    todo: req.body.todo,
    isCompleted: req.body.isCompleted,
  });
  await data.save();
  res.json({ success: true, message: "Data created successfully" });
};

const todoUpdate = async (req, res) => {
  const { id, ...rest } = req.body;
  await userModel.updateOne({ _id: id }, rest);
  res.json({ success: true, message: "Data updated successfully" });
};

const todoDelete = async (req, res) => {
  const { id } = req.body;
  await userModel.deleteOne({ _id: id });
  res.json({ success: true, message: "Data deleted successfully" });
};

const todoFind = async (req, res) => {
  // const { id } = req.body;
  const data = await userModel.find({});
  res.json(data);
};
module.exports = { todoCreate, todoUpdate, todoDelete, todoFind };
