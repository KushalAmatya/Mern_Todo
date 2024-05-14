import { useContext, useState } from "react";
import axios from "axios";
import { TodoContext } from "../context/todo.context";

const EditForm = ({ editStatus }) => {
  const { data, setData } = useContext(TodoContext);
  const [editTodo, setEditTodo] = useState(editStatus.todo);
  console.log(editStatus);
  const handleEdit = async (e) => {
    e.preventDefault();

    const editVal = await axios.put("/update", {
      id: editStatus,
      todo: editTodo,
    });
    console.log(editVal);
    setData(editVal.data.data);
  };
  return (
    <div className="overflow-x-auto mx-12 flex  items-center justify-center">
      <div className="border w-1/6 p-2 mt-3 max-h-48 rounded">
        <h1 className="text-center text-white font-bold mb-3 text-">
          Edit Form
        </h1>
        <form
          onSubmit={handleEdit}
          className="flex text-center justify-center items-center flex-col"
        >
          <input
            type="text"
            placeholder="Edit Todo"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
          <button
            type="submit"
            className={`py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:cursor-default  hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-blue-500 rounded mt-3
  `}
            data-ripple-light="true"
          >
            Edit
          </button>
          {console.log(editStatus)}
        </form>
      </div>
    </div>
  );
};
export default EditForm;
