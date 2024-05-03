const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

const port = process.env.PORT || 8080;

const schemaData = mongoose.Schema(
  {
    name: String,
    email: String,
    phone: Number,
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", schemaData);

app.get("/", async (req, res) => {
  const data = await userModel.find();
  res.json({ success: true, data: data });
});

app.post("/create", async (req, res) => {
  console.log(req.body);
  const data = new userModel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });
  await data.save();
  res.json({ success: true, message: "Data created successfully" });
});

app.put("/update", async (req, res) => {
  const { id, ...rest } = req.body;
  await userModel.updateOne({ _id: id }, rest);
  res.json({ success: true, message: "Data updated successfully" });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/crudoperation")
  .then(() => {
    console.log("connected to database");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
