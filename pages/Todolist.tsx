import { handleClientScriptLoad } from "next/script";
import React, { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const Todolist: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "งงจังเลย", completed: false },
    { id: 2, text: "Todolist", completed: false },
  ]);
  const [input, setInput] = useState<string>("");
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteClick = (id: number) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  };

  return (
    <div className="main-container">
      <h1>Todolist</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleToggle(todo.id)}>
            {todo.text}{" "}
            <button onClick={() => handleDeleteClick(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="add todo list"
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button onClick={handleClick}>add</button>
    </div>
  );
};
