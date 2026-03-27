import * as taskService from '../services/taskService.js';

export function getBoard(_req, res, next) {
  try {
    res.status(200).json(taskService.getBoardData());
  } catch (error) {
    next(error);
  }
}
