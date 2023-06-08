import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Navbar />
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
