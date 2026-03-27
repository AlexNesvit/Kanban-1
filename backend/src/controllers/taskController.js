import { listTasks } from '../services/taskService.js';

export const getTasks = (_req, res) => {
  const tasks = listTasks();
  res.status(200).json(tasks);
};
