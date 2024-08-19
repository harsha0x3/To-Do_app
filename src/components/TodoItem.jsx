import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [todoMessage, setTodoMessage] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMessage });
    console.log(isEditable);
    setIsEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        toggleCompleted ? "bg-[#c6e9a7]" : "bg[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditable ? "border-black/10 px-2" : "border-transparent"
        }`}
        value={todoMessage}
        readOnly={!isEditable}
        onChange={(e) => setTodoMessage(e.target.value)}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          console.log("inner", isEditable);
          if (isEditable) {
            editTodo();
          } else setIsEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isEditable ? "save" : "edit"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;