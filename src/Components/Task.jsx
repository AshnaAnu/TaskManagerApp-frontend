import React, { useState } from 'react';

const Task = ({ task, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleUpdate = () => {
    const updatedTask = {
      title: updatedTitle,
      description: updatedDescription,
    };
    updateTask(task.id, updatedTask);  
    setIsEditing(false);
  };

  return (
    <div className="task-card">
      {isEditing ? (
        <div>
          <input className='form-control mb-2'
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea className='form-control mb-2'
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          ></textarea>
          <button onClick={handleUpdate} className='me-2'>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className='d-flex mt-5'> <button className='me-2' onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button></div>
         
        </div>
      )}
    </div>
  );
};

export default Task;
