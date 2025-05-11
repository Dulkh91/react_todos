import {useState} from 'react'
const NewTaskForm = ({onAdd}) => {
    const [value, setValue] = useState('')
    const handleSubmit =(e)=>{
      if(e.key === 'Enter' && value.trim()){
      onAdd(value.trim())
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
  