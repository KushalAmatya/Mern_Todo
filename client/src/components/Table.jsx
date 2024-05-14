import React, { useContext, useState } from "react";
import axios from "axios";
import { TodoContext } from "../context/todo.context";
import EditForm from "./EditForm";
// import { set } from "mongoose";
axios.defaults.baseURL = "http://localhost:3000";
const Table = () => {
  const { data, setData } = useContext(TodoContext);
  const [btnclick, setBtnclick] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [id, setId] = useState(null);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const editForm = (id, todo) => {
    setEditSection(true);
    setSelectedTodo(todo);
    console.log(id, "id");
    setId(id);
  };
  return (
    <>
      {editSection && <EditForm editStatus={selectedTodo} />}

      {
        <div className="overflow-x-auto mx-12">
          <table className="table-auto w-full">
            <thead>
              <tr className="text-white">
                <th className="px-3 py-2 w-3/5">Todos</th>
                <th className="px-3 py-2 w-1/5">Completion</th>
                <th className="px-3 py-2 w-1/5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr
                  key={item._id}
                  className={`${
                    index % 2 == 0
                      ? "bg-slate-200 text-black"
                      : "bg-slate-600 text-white"
                  }`}
                >
                  <td className="border px-3 py-2 border-slate-900">
                    {item.todo}
                  </td>
                  <td className="border px-3 py-2 text-center border-slate-900">
                    <button
                      className={`middle none center rounded-lg ${
                        item.isCompleted
                          ? "bg-green-400 hover:shadow-green-800"
                          : "bg-pink-700  hover:shadow-pink-500/40"
                      } py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:cursor-default focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                      data-ripple-light="true"
                      onClick={async () => {
                        const updateddat = await axios.put("/update", {
                          id: item._id,
                          isCompleted: !item.isCompleted,
                        });
                        setBtnclick(!btnclick);
                        console.log(updateddat, "updated data");
                        setData(updateddat.data.data);
                        setEditSection(false);
                      }}
                    >
                      {item.isCompleted ? "Yes" : "No"}
                    </button>
                  </td>
                  <td className="border px-3 py-2 text-center center">
                    <button
                      className="bg-blue-500 text-white p-2 rounded h-9"
                      onClick={() => editForm(item._id, item)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white p-2 rounded ml-2 h-9"
                      onClick={() => {
                        axios
                          .delete("/delete", {
                            data: {
                              id: item._id,
                            },
                          })
                          .then((res) => {
                            console.log(res, "yoyoyo");
                            setData((prev) =>
                              prev.filter((i) => i._id !== item._id)
                            );
                          });
                        setEditSection(false);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </>
  );
};

export default Table;
