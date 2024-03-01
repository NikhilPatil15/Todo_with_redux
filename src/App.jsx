import { useState } from "react";
import "./App.css";
import { AddTodo, AllTodos } from "./components/index";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div id="container " style={{ height: "30rem" }}>
        <div className="w-full max-w-2xl mx-auto  rounded-lg px-4 py-3 text-white shadow  shadow-white duration-300">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <AddTodo />
          </div>
          <div className="flex flex-wrap gap-y-3">
            <AllTodos />
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
