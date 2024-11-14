
import React from 'react';
import TaskForms from '../Components/TaskForms'; 
import TaskLists from '../Components/TaskLists'; 

const Home = ({ tasks, addTask, deleteTask }) => {
  return (
    <div>
        
      <TaskForms addTask={addTask} />
      <TaskLists tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default Home;
