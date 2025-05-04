import { formatDistanceToNow } from "date-fns";
const Task = () => {
  const timeAgo = formatDistanceToNow(new Date("2025,5,1"), {
    addSuffix: true,
  });
  return (
    <ul className="todo-list">
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">Completed task</span>
            <span className="created">created {timeAgo}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
      </li>
    </ul>
  );
};
export default Task;