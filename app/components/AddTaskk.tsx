import React, { useState } from "react";

const AddTask = (props) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    newTask ? props.onNewTask(newTask) : alert("Enter a task");
    setNewTask("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center bg-slate-300 m-2 p-3 rounded-sm gap-3 "
      >
        <input
          type="text"
          value={newTask}
          placeholder="Enter a task..."
          onChange={(e) => setNewTask(e.target.value)}
          className="rounded-md p-2"
        />
        <button className=" bg-zinc-900 text-white rounded-md p-1.5 ">
          Add Task
        </button>
      </form>
    </>
  );
};

export default AddTask;
