import { Router } from 'express';
import { createTask, editTask, getTasks } from '../controllers/taskController.js';
import { validateTaskPayload } from '../middlewares/validateTaskPayload.js';

const router = Router();

router.get('/', getTasks);
router.post('/', validateTaskPayload, createTask);
router.put('/:taskId', validateTaskPayload, editTask);

export default router;
