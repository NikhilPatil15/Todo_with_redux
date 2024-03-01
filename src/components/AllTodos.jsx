import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../redux/Features/TodoSlice";
import toast from "react-hot-toast";
const AllTodos = () => {
  const todoData = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [id, setId] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    dispatch(updateTodo({ id: id, text: text }));
    setIsClicked(!isClicked);
    toast.success("Todo Updated Successfully");
  };

  const handleDelete = (e) => {
    dispatch(removeTodo(e));
    toast.success("Todo deleted successfully");
  };
  const setclick = (e) => {
    setId(e);
    setIsClicked(!isClicked);
  };

  return (
    <div className="flex  flex-col w-full border border-black/10 rounded-lg px-3 py-1.5 gap-x-3   text-black">
      {todoData.map((todo) => (
        <ul className="w-full flex  bg-slate-500 text-xl justify-between rounded text-white my-2 p-3">
          <li key={todo.id}>{todo.text}</li>

          {isClicked && id === todo.id ? (
            <li className="flex flex-row">
              <input
                onChange={(e) => setText(e.target.value)}
                className="text-2xl w-full border rounded-l-lg border-black/10  px-3 outline-none duration-150 bg-white/20  "
              />
              <button
                onClick={handleClick}
                className="inline-flex w-10 h-10 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 rounded-r-lg py-1.5"
              >
                📁
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={() => handleDelete(todo.id)}
                className="inline-flex w-10 h-10 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 "
              >
                ❌
              </button>
              <button
                className="inline-flex w-10 h-10 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 "
                onClick={() => setclick(todo.id)}
              >
                ✏️
              </button>
            </li>
          )}
        </ul>
      ))}
    </div>
  );
};

export default AllTodos;
