import { Router } from 'express';
import { getBoard } from '../controllers/boardController.js';

const router = Router();

router.get('/', getBoard);

export default router;
