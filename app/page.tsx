"use client";

import React, { useState } from "react";
import AddTask from "./components/AddTaskk";
import Tasks from "./components/Tasks";

const page = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const getNewTask = (newTask: string) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index: number) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  return (
    <main>
      <div>
        <AddTask onNewTask={getNewTask} />
      </div>

      <div className="flex  flex-col items-center m-2 ">
        {tasks.map((task, index) => (
          <li key={index} className="list-none">
            <div className="flex flex-1 m-2 p-2 justify-between bg-zinc-200 rounded-md  w-[75dvw] ">
              <Tasks data={task} />
              <button
                className=" bg-red-700 text-white rounded-md p-1.5 "
                onClick={() => removeTask(index)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </div>
    </main>
  );
};

export default page;
