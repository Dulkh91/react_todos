import TasksFilter from "./TasksFilter";
const Footer = ({active, setActive, tasks, onClearCompleted}) => {
  const countItem = tasks.filter(task=> !task.completed).length
  return (
    <footer className="footer">
      <span className="todo-count">{countItem} item{countItem>1? 's': ''} left</span>
      <TasksFilter active={active} setActive={setActive}/>
      {tasks.some(task=> task.completed) &&(<button className="clear-completed" onClick={onClearCompleted}>Clear completed</button>)}
    </footer>
  );
};

export default Footer;
