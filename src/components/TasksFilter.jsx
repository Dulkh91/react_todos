const TasksFilter = ({active, setActive}) => {
    return (
      <ul className="filters">
        {['All', 'Active', 'Completed'].map(list=>
          (<li key={list}>
            <button 
            className={active === list? 'selected': ''}
            onClick={()=>setActive(list)}
            >{list}</button>
          </li>)
        )}
      </ul>
    );
  };
  export default TasksFilter;
  