import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.status(200).json({ message: 'API is running' });
});

app.use('/api/tasks', taskRoutes);

export default app;
