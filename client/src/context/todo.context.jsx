import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [btnclick, setBtnclick] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/find");
      setData(result.data);
      console.log(result);
    };
    fetchData();
  }, []);
  return (
    <TodoContext.Provider value={{ btnclick, setBtnclick, data, setData }}>
      {children}
    </TodoContext.Provider>
  );
};
