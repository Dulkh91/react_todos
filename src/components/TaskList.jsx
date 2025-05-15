import Task from "./Task";
const TaskList = ({ tasks, onToggle, onDelete, onEdit, onUpdate }) => {
  return (
    <section className="main">
      {tasks.map((task) => (
        <Task
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          onUpdate={onUpdate}
        />
      ))}
    </section>
  );
};

export default TaskList;
