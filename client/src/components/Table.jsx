import React, { useContext, useState } from "react";
import axios from "axios";
import { TodoContext } from "../context/todo.context";
axios.defaults.baseURL = "http://localhost:3000";
const Table = () => {
  const { data } = useContext(TodoContext);
  const [btnclick, setBtnclick] = useState(false);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get("/find");
  //     setData((prev) => [...prev, ...result.data]);
  //   };
  //   fetchData();
  // }, []);
  console.log(data, "data hello");
  return (
    <>
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
              <tr key={item.id}>
                <td className="border px-3 py-2">{item.todo}</td>
                <td className="border px-3 py-2 text-center">
                  <button
                    className={`middle none center rounded-lg ${
                      btnclick && item.isCompleted == true
                        ? "bg-green-400"
                        : "bg-pink-700"
                    } py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:cursor-default hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                    data-ripple-light="true"
                    onClick={() => setBtnclick(!btnclick)}
                  >
                    {item.isCompleted ? "Yes" : "No"}
                  </button>
                </td>
                <td className="border px-3 py-2 text-cen ter">
                  <button className="bg-blue-500 text-white p-2 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

/* <tr>
    <td className="border px-3 py-2">Data 1</td>
    <td className="border px-3 py-2 text-center">
      <button
        className={`middle none center rounded-lg ${
          btnclick ? "bg-green-400" : "bg-pink-700"
        } py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:cursor-default hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
        data-ripple-light="true"
        onClick={() => setBtnclick(!btnclick)}
      >
        {btnclick ? "Yes" : "No"}
      </button>
    </td>
    <td className="border px-3 py-2 text-center">
      <button className="bg-blue-500 text-white p-2 rounded">
        Edit
      </button>
      <button className="bg-red-500 text-white p-2 rounded ml-2">
        Delete
      </button>
    </td>
  </tr>
  <tr className="bg-gray-100">
    <td className="border px-3 py-2">Data 3</td>
    <td className="border px-3 py-2">Data 5</td>
    <td className="border px-3 py-2">Data 6</td>
  </tr>
  <tr>
    <td className="border px-3 py-2">Data 7</td>
    <td className="border px-3 py-2">Data 8</td>
    <td className="border px-3 py-2">Data 9</td>
  </tr> */
