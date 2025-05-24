import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <div className="mb-16">
      <h1 className="font-semibold text-center my-4 text-4xl text-[#ffffff] mb-6">
        Task Manager
      </h1>
      <form onSubmit={add} className="flex justify-center my-3">
        <input
          type="text"
          placeholder="Your Todo"
          className="w-1/3 border border-white rounded-l-lg px-3 outline-none duration-150 bg-transparent placeholder-[#a3a3a3] text-white"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="addButton rounded-r-lg px-3 py-1 bg-[#ffffff] shrink-0 font-semibold text-[#000000]"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
