import { useEffect, useMemo, useState } from 'react';
import KanbanColumn from './KanbanColumn.jsx';
import { fetchBoardData } from '../services/taskService.js';

function KanbanBoard() {
  const [columns, setColumns] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadBoard() {
      try {
        const data = await fetchBoardData();
        setColumns(data.columns);
        setTasks(data.tasks);
      } catch (err) {
        setError(err.message || 'Unknown API error.');
      } finally {
        setLoading(false);
      }
    }

    loadBoard();
  }, []);

  const tasksByColumn = useMemo(() => {
    return tasks.reduce((acc, task) => {
      if (!acc[task.columnId]) {
        acc[task.columnId] = [];
      }
      acc[task.columnId].push(task);
      return acc;
    }, {});
  }, [tasks]);

  if (loading) {
    return <p className="board-state">Loading board...</p>;
  }

  if (error) {
    return (
      <p className="board-state board-state--error" role="alert">
        {error}
      </p>
    );
  }

  return (
    <div className="kanban-board" role="region" aria-label="Kanban board">
      {columns.map((column) => (
        <KanbanColumn key={column.id} column={column} tasks={tasksByColumn[column.id] || []} />
      ))}
    </div>
  );
}

export default KanbanBoard;
