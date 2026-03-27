function TaskList({ items }) {
  return (
    <ul className="task-list">
      {items.map((task) => (
        <li key={task.id}>
          <strong>{task.title}</strong> - <span>{task.status}</span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
