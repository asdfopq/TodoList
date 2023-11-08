import React from "react"
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(todo !== ''){
      setTodos([ ...todos, {id: `${todo}-${Date.now()}`, todo}]);
      setTodo("");
    }
    

    if(editId){
      const editTodo = todos.find((t) => t.id === editId);
      const updatedTodos = todos.map((t) => 
      t.id === editTodo.id
      ? (t = {id:t.id, todo})
      : {id:t.id, todo: t.todo}
      );
      setTodos(updatedTodos);
      setEditId(0)
      setTodo("");
      return;
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((t) => t.id !== id);
    setTodos([...delTodo]);
  };
  
  const handleEdit = (id) => {
    const editTodo = todos.find((t) => t.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        <TodoForm 
        handleSubmit={handleSubmit} 
        todo={todo} editId={editId} 
        setTodo={setTodo} />

        <Todos 
        handleEdit={handleEdit} 
        todos={todos} 
        handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
