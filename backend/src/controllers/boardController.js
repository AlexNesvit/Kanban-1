import * as taskService from '../services/taskService.js';

export function getBoard(_req, res) {
  try {
    res.status(200).json(taskService.getBoardData());
  } catch (_error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
