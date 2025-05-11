import './App.css'
import {useState} from 'react'
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";


function App() {
  const [tasks, setTasks] = useState([])
  const onToggle =(id)=>{
    setTasks(tasks.map(task=> task.id === id? {...task, completed: !task.completed}: task))
  }

  const onAdd = (description)=>{
      const addTask = {id: Date.now(),description, completed: false,editing: false, createAt: new Date()}
      setTasks([...tasks, addTask])
  }

  const onDelete =(id)=>{
    setTasks(tasks.filter(task=> task.id !== id))
  }

  const onEdit = (id)=>{
    setTasks(tasks.map(task=> task.id===id? {...task, editing: true}: {...task, editing:false}))
  }
  
  const onUpdate = (id,description)=>{
    setTasks(tasks.map(task=> task.id === id? {...task, description, editing: false}: task))
  }
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAdd={onAdd}/>
      </header>
      {tasks.map(task=>(
        <TaskList key={task.id} 
        task={task} 
        onToggle={onToggle}
        onDelete={onDelete}
        onEdit={onEdit}
        onUpdate={onUpdate}
        />
      ))}
      <Footer />
    </section>
  )
  
}

export default App
