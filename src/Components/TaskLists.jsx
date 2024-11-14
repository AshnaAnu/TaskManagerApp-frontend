import React from 'react';
import Task from './Task';
import './TaskLists.css'; 

const TaskLists = ({ tasks = [], deleteTask, updateTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <h2 className='fw-bolder text-white' style={{fontStyle:"italic"}}>No Tasks Available...</h2>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskLists;
