import {useState} from 'react'

import { useTodosContext } from './context/TodoContext';

// import useTodos from '../hooks/useTodos';
const NewTaskForm = () => {
    const [value, setValue] = useState('')

    // const {addTodos} = useTodos()
    const {addTodos} = useTodosContext()
  
    const handleSubmit =(e)=>{
      if(e.key === 'Enter' && value.trim()){
      addTodos(value.trim())
     
      setValue('')
      }
    }
   
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={(e)=> setValue(e.target.value)}
        onKeyDown={handleSubmit}
        value={value}
        type='text'
        autoFocus
      />
    );
  };
  
  export default NewTaskForm;
  