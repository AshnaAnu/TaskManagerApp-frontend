import React, { useState, useEffect } from 'react';
import TaskForms from './Components/TaskForms'; 
import TaskLists from './Components/TaskLists'; 
import { addTaskAPI, getTasksAPI, deleteTaskAPI ,updateTaskAPI} from './Services/AllAPIs'; 
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasksAPI();
      if (data.error) {
        throw new Error(data.error);
      }
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error.message);
    }
  };

  const addTask = async (task) => {
    try {
      const data = await addTaskAPI(task);
      if (data.error) {
        throw new Error(data.error);
      }
      setTasks([...tasks, data]);
    } catch (error) {
      console.error('Error adding task:', error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      const data = await deleteTaskAPI(id);
      if (data.error) {
        throw new Error(data.error);
      }
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const data = await updateTaskAPI(id, updatedTask); 
      setTasks(tasks.map(task => (task.id === id ? data : task))); 
    } catch (error) {
      console.error('Error updating task:', error.message);
    }
  };
  return (
    <div className="app-container">
      <div className="form-container">
        <TaskForms addTask={addTask} />
      </div>
      <div className="task-container">
        <TaskLists tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
      </div>
    </div>
  );
};

export default App;
