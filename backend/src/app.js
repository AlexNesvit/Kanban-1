import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';
import boardRoutes from './routes/boardRoutes.js';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.status(200).json({ message: 'API is running' });
});

app.use('/api/board', boardRoutes);
app.use('/api/tasks', taskRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
