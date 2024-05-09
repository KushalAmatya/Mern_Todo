import React, { useState, useContext } from "react";
import axios from "axios";
import { TodoContext } from "../context/todo.context";

axios.defaults.baseURL = "http://localhost:3000";
function AddTodo() {
  // const [todo, setTodo] = useState("");
  const { data, setData } = useContext(TodoContext);
  const [todo, setTodo] = useState({
    todo: "",
    isCompleted: false,
  });
  const handleChange = (e) => {
    const { value } = e.target;
    setTodo((prev) => ({
      ...prev,
      todo: value,
    }));
  };
  const handleClick = async () => {
    if (!todo.todo) return;
    const tododata = await axios.post("/create", todo);
    console.log(tododata);
    setTodo({
      todo: tododata.data.data.todo,
      isCompleted: tododata.data.data.isCompleted,
    });
  };
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-semibold text-white">Add TODO</h1>
        <div className="mt-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Add a new task"
            onChange={handleChange}
            value={todo.todo}
          />
          <button
            className="mt-2 bg-blue-500 text-white p-2 rounded"
            onClick={handleClick}
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
