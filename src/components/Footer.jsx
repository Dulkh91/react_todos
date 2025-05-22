import { useTodosContext } from "./context/TodoContext";

import TasksFilter from "./TasksFilter";

const Footer = () => {
  const {tasks,filter,setFilter,clearCopmpleted} = useTodosContext()
    
  // count number 
  const countItem = tasks.filter(task=> !task.completed).length 
  return (
    <footer className="footer">
      <span className="todo-count">{countItem} item{countItem>1? 's': ''} left</span>
      {/* <TasksFilter/> */}
      <TasksFilter active={filter} setActive={setFilter}/>
      {tasks.some(task=> task.completed) &&(<button className="clear-completed" onClick={clearCopmpleted}>Clear completed</button>)}
    </footer>
  );
};

export default Footer;

