import { useEffect, useState } from 'react';
import TaskList from '../components/TaskList.jsx';
import { fetchTasks } from '../services/taskService.js';

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadTasks() {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadTasks();
  }, []);

  return (
    <main className="container">
      <h1>Kanban Project</h1>
      <p>React app connected to Express API.</p>
      {loading && <p>Loading tasks from API...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <TaskList items={tasks} />}
    </main>
  );
}

export default HomePage;
