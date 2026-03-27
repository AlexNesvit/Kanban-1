import { randomUUID } from 'node:crypto';
import { createColumn } from '../models/columnModel.js';
import { createTask } from '../models/taskModel.js';
import { AppError } from '../errors/AppError.js';

function generateDemoBoard() {
  const columns = [
    createColumn({ id: 'todo', name: 'To Do' }),
    createColumn({ id: 'in-progress', name: 'In Progress' }),
    createColumn({ id: 'done', name: 'Done' })
  ];

  const tasks = [
    createTask({
      id: randomUUID(),
      name: 'Préparer le backlog',
      color: '#F97316',
      columnId: 'todo'
    }),
    createTask({
      id: randomUUID(),
      name: 'Créer les endpoints API',
      color: '#3B82F6',
      columnId: 'in-progress'
    }),
    createTask({
      id: randomUUID(),
      name: 'Configurer le front React',
      color: '#22C55E',
      columnId: 'done'
    })
  ];

  validateTaskColumnReferences(tasks, columns);
  return { columns, tasks };
}

function validateTaskColumnReferences(tasks, columns) {
  const existingColumnIds = new Set(columns.map((column) => column.id));
  for (const task of tasks) {
    if (!existingColumnIds.has(task.columnId)) {
      throw new Error(`Invalid task reference: unknown columnId "${task.columnId}".`);
    }
  }
}

const boardData = generateDemoBoard();
export function listTasks() {
  return boardData.tasks;
}

export function listColumns() {
  return boardData.columns;
}

export function getBoardData() {
  return {
    columns: boardData.columns,
    tasks: boardData.tasks
  };
}

function assertColumnExists(columnId) {
  const exists = boardData.columns.some((column) => column.id === columnId);
  if (!exists) {
    throw new AppError(400, 'Task references an unknown column.');
  }
}

export function addTask(taskPayload) {
  assertColumnExists(taskPayload.columnId);

  let task;
  try {
    task = createTask({
      id: randomUUID(),
      ...taskPayload
    });
  } catch (error) {
    throw new AppError(400, error.message);
  }

  boardData.tasks.push(task);
  return task;
}

export function updateTask(taskId, taskPayload) {
  if (typeof taskId !== 'string' || taskId.trim().length === 0) {
    throw new AppError(400, 'Task id parameter is required.');
  }

  const index = boardData.tasks.findIndex((task) => task.id === taskId);
  if (index === -1) {
    throw new AppError(404, 'Task not found.');
  }

  assertColumnExists(taskPayload.columnId);

  let updatedTask;
  try {
    updatedTask = createTask({
      id: taskId,
      ...taskPayload
    });
  } catch (error) {
    throw new AppError(400, error.message);
  }

  boardData.tasks[index] = updatedTask;
  return updatedTask;
}
