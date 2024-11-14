import React, { useState } from 'react';
import './TaskForms.css'; 

const TaskForms = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    const newTask = {
      title,
      description,
    };
    addTask(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
        <h2  style={{position:"absolute",top:"50px",left:"135px",color:"white",backgroundColor:"#35aa83",width:"230px",padding:"10px",borderRadius:"6px"}}>Task Manager</h2>
        
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add Task</button>
    </form></div>
  );
};

export default TaskForms; 
