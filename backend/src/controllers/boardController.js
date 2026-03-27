import { getBoardData } from '../services/taskService.js';

export function getBoard(_req, res) {
  res.status(200).json(getBoardData());
}
