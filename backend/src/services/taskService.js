import { randomUUID } from 'node:crypto';
import { createColumn } from '../models/columnModel.js';
import { createTask } from '../models/taskModel.js';

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
