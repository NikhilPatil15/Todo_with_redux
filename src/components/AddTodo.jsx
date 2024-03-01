import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/Features/TodoSlice";
import toast from "react-hot-toast";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) {
      toast.error(
        "You should enter something before pressing that fucking button, asshole"
      );
    } else {
      dispatch(addTodo(todo));
      setTodo("");
      toast.success("Todo Added");
    }
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write Todo..."
        className=" text-2xl w-full border rounded-l-lg border-black/10  px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
