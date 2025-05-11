import Task from "./Task";
const TaskList = ({task, onToggle, onDelete, onEdit, onUpdate}) => {
  return (
    <section className="main">
      <Task task={task} 
      onToggle={onToggle} 
      onDelete={onDelete} 
      onEdit={onEdit}
      onUpdate={onUpdate}
      />
     
    </section>
  );
};

export default TaskList;
