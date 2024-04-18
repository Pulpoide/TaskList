import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, Link } from "react-router-dom"
import { AddTask } from './pages/AddTask'
import { ListaTareas } from './components/ListaTareas'
import { VisibilityControl } from './components/VisibilityControl'
import { Container } from './components/Container'
import { IoAddCircle } from "react-icons/io5";


function App() {

  const [tasksItems, setTasksItems] = useState([])
  const [showCompleted, setshowCompleted] = useState(false)


  function createNewTask(taskName) {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, completed: false }])
    }
  }

  const toggleTask = task => {
    setTasksItems(
      tasksItems.map(tarea => (tarea.name === task.name) ? { ...tarea, completed: !tarea.completed } : tarea)
    );
  }

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter(tarea => !tarea.completed))
    setshowCompleted(false)
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  }, [tasksItems])

  return (

    <Routes>
      <Route exact path='/' element={(
        <Container>
          <h1>LISTA DE TAREAS</h1>
          <hr />

          <ListaTareas tareas={tasksItems} toggleTask={toggleTask} />
          
          <div className='d-flex justify-content-center'>
            <Link to="/add">
              <button className="button-17" role="button">
                <IoAddCircle />
              </button>
            </Link>
          </div>

          <hr />
          <VisibilityControl
            isChecked={showCompleted}
            setshowCompleted={(checked) => setshowCompleted(checked)}
            cleanTasks={cleanTasks}
          />
          <hr />
          {
            showCompleted &&
            (
              <ListaTareas tareas={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted} />
            )
          }
        </Container>
      )} />


      <Route
        path='/add'
        element={(
          <AddTask createNewTask={createNewTask} />
        )}
      />

    </Routes>


  )
}

export default App
