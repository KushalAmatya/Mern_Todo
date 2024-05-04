const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const todorouter = require("./routes/todo.Routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

const port = process.env.PORT || 8080;

app.use("/", todorouter);

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("connected to database");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
