const express = require("express");
const todorouter = express.Router();
const {
  todoCreate,
  todoUpdate,
  todoDelete,
  todoFind,
} = require("../controller/todoController");

todorouter.post("/create", todoCreate);
todorouter.put("/update", todoUpdate);
todorouter.delete("/delete", todoDelete);
todorouter.get("/find", todoFind);
module.exports = todorouter;
