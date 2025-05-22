
import React, { useState, useEffect } from 'react';

const useTodos = (initialTodos = []) => {

    const [tasks, setTasks] = useState(()=>{
        const saveTodos = localStorage.getItem('todos')
        return saveTodos? JSON.parse(saveTodos) : initialTodos
    })
    const [input, setInput] = useState('')
    
    // filter state 
    const [filter, setFilter] = useState('All')// All | Active | Completed

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(tasks))
    
    },[tasks])

    // Add Task
    const addTodos =(description) =>{
        if(!description.trim()) return;

        const newTodo = {
            id: Date.now(),
            description,
            completed: false,
            editing: false,
            createAt: new Date(),
        }

        setTasks([...tasks, newTodo])
        setInput('')
    }
// Mark task completed
const onToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

//Deleted task
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


 // Editing task
 const onEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, editing: true }
          : { ...task, editing: false }
      )
    );
  };
 
  // Update after click editing 
const onUpdate = (id, description) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, description, editing: false } : task
      )
    );
  };

  // Footer do with filter 
  const filterTask = ()=>{
    if(filter === 'Active') return tasks.filter(task=>!task.completed)
    if(filter === 'Completed') return tasks.filter(task=>task.completed)
    return tasks
  }

  // Clear completed
  const clearCopmpleted = ()=>{
    setTasks(tasks.filter(task=>!task.completed))
  }

  return {
    input,
    tasks,
    addTodos,
    onToggle,
    onDelete,
    onEdit,
    onUpdate,
    filterTask,
    filter,
    setFilter,
    clearCopmpleted
    }
}
 
export default useTodos;


