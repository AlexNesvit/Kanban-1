import { addTask, listTasks, updateTask } from '../services/taskService.js';

export function getTasks(_req, res, next) {
  try {
    const tasks = listTasks();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
}

export function createTask(req, res, next) {
  try {
    const createdTask = addTask(req.validatedTask);
    res.status(201).json(createdTask);
  } catch (error) {
    next(error);
  }
}

export function editTask(req, res, next) {
  try {
    const updatedTask = updateTask(req.params.taskId, req.validatedTask);
    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
}
