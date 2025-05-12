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
    <>
      <h1 className="font-semibold text-center my-4 text-3xl text-[#ffed00]">
        Task Manager
      </h1>
      <form onSubmit={add} className="flex justify-center my-3">
        <input
          type="text"
          placeholder="Your Todo"
          className="w-1/3 border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/55 py-1.5 placeholder-[#7a7535]"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="addButton rounded-r-lg px-3 py-1 bg-[#163473] shrink-0 font-semibold text-[#ffed00]"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;
