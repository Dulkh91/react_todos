import Task from "./Task";
//import useTodos from "../hooks/useTodos";

import { useTodosContext } from "./context/TodoContext";

const TaskList = () => {

const {filterTask,onToggle ,onDelete,onEdit, onUpdate} = useTodosContext()
// const {tasks} = useTodos()

const tasks = filterTask()

  return (
    <section className="main">
      {tasks.map((task) => (
        <Task
          key={task.id}
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
