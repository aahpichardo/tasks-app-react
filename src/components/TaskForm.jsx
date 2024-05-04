import { React, useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm({  }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title,description)
    createTask({
      title,
      description
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="ma-w-md mx-auto">
          <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold text-white mb-3">Add a new task</h1>
      <input className="bg-slate-300 p-3 w-full mb-2" value={title}
        placeholder="Type your task"
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <textarea className="bg-slate-300 p-3 w-full mb-2" value={description} placeholder="Type the description of the task" onChange={(e) => setDescription(e.target.value)}></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400 rounded-md">Save</button>
    </form>
    </div>
  );
}

export default TaskForm;
