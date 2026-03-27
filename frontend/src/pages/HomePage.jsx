import TaskList from '../components/TaskList.jsx';
import { tasks } from '../services/taskService.js';

function HomePage() {
  return (
    <main className="container">
      <h1>Kanban Project</h1>
      <p>Initial structure with React components.</p>
      <TaskList items={tasks} />
    </main>
  );
}

export default HomePage;
