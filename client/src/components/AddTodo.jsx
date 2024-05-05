import React, { useState } from "react";
function AddTodo() {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleClick = () => {
    if (!todo) {
      return;
    }
    console.log(todo);
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
