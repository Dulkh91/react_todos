import "./App.css";
import { useState } from "react";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  // set Active button
  const [active, setActive] = useState("All");

  const onToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const onAdd = (description) => {
    const addTask = {
      id: Date.now(),
      description,
      completed: false,
      editing: false,
      createAt: new Date(),
    };
    setTasks([...tasks, addTask]);
  };

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, editing: true }
          : { ...task, editing: false }
      )
    );
  };

  const onUpdate = (id, description) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, description, editing: false } : task
      )
    );
  };

  const filterTask = tasks.filter(task=>{
    if(active === 'Active') return !task.completed;
    if(active === 'Completed') return task.completed;
    return task
  })

  const clearCopmpleted = ()=>{
    setTasks(tasks.filter(task=>!task.completed))
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAdd={onAdd} />
      </header>
      <TaskList
        tasks={filterTask}
        onToggle={onToggle}
        onDelete={onDelete}
        onEdit={onEdit}
        onUpdate={onUpdate}
      />

      <Footer active={active} setActive={setActive}  tasks={tasks} onClearCompleted={clearCopmpleted}/>
    </section>
  );
}

export default App;
