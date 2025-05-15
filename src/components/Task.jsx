import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
const Task = ({task = [] , onToggle,onDelete,onEdit, onUpdate}) => {
  const [update, setUpdate] = useState(task.description)

  const timeAgo = formatDistanceToNow(task.createAt, {
    addSuffix: true,
  });
  
  const handleKeydown =(e)=>{
    if(e.key ==='Enter' && update.trim()){
      onUpdate(task.id, update.trim())
    }else if(e.key === 'Escape'){
      setUpdate(task.description)
      onUpdate(task.id, task.description)
    }
  }
  return (
    <ul className="todo-list">
      <li className={task.completed? 'completed': task.editing? 'editing': ''}>
        <div className="view">
          <input className="toggle" type="checkbox"
            checked={task.completed}
            onChange={()=>onToggle(task.id)}
          />
          <label>
            <span className="description">{task.description}</span>
            <span className="created">created {timeAgo}</span>
          </label>
          <button className="icon icon-edit" onClick={()=> onEdit(task.id)}></button>
          <button className="icon icon-destroy" onClick={()=> onDelete(task.id)}></button>
        </div>
        <input type="text" 
        className="edit" 
        value={update}
        onChange={(e)=>setUpdate(e.target.value)} 
        onKeyDown={handleKeydown}
        
        />
      </li>
    </ul>
  );
};
export default Task;