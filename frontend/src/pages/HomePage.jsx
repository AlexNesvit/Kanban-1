import KanbanBoard from '../components/KanbanBoard.jsx';

function HomePage() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>Kanban Board</h1>
        <p>Visualisation dynamique des colonnes et des tâches depuis l'API.</p>
      </header>
      <KanbanBoard />
    </main>
  );
}

export default HomePage;
