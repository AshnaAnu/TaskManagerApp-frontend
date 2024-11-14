import { serverURL } from './serverURL';
import { commonAPI } from './commonAPI';

// Add a task
export const addTaskAPI = async (task) => {
  return await commonAPI('post', `${serverURL}/tasks`, task);
};

// Get all tasks
export const getTasksAPI = async () => {
  return await commonAPI('get', `${serverURL}/tasks`, {});
};

// Delete a task
export const deleteTaskAPI = async (id) => {
  return await commonAPI('delete', `${serverURL}/tasks/${id}`, {});
};

// Update a task
export const updateTaskAPI = async (id, updatedTask) => {
  return await commonAPI('put', `${serverURL}/tasks/${id}`, updatedTask);
};


