import "./App.css";
import AddTodo from "./components/AddTodo";
import Nav from "./components/Nav";
import Table from "./components/Table";
import { TodoProvider } from "./context/todo.context";

function App() {
  return (
    <TodoProvider>
      <Nav />
      <AddTodo />

      <Table />
    </TodoProvider>
  );
}

export default App;
