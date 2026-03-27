function KanbanTaskCard({ task }) {
  return (
    <article className="task-card" aria-label={`Task ${task.name}`}>
      <span className="task-card__color" style={{ backgroundColor: task.color }} aria-hidden="true" />
      <h3 className="task-card__title">{task.name}</h3>
    </article>
  );
}

export default KanbanTaskCard;
