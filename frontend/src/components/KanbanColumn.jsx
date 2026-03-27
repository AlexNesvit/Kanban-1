import KanbanTaskCard from './KanbanTaskCard.jsx';

function KanbanColumn({ column, tasks }) {
  return (
    <section className="kanban-column" aria-label={`${column.name} column`}>
      <header className="kanban-column__header">
        <h2>{column.name}</h2>
        <span className="kanban-column__count">{tasks.length}</span>
      </header>
      <div className="kanban-column__content">
        {tasks.map((task) => (
          <KanbanTaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}

export default KanbanColumn;
