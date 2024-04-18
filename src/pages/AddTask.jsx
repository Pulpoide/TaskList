import { useState } from "react";
import { Link } from "react-router-dom"
import { Container } from "../components/Container"
import '../App.css'


export const AddTask = ({ createNewTask }) => {
    const [newTaskName, setNewTaskName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask(newTaskName);
        setNewTaskName("")
    }

    return (
        <Container>
            <h1>Nueva Tarea:</h1>
            <hr />
            <form onSubmit={handleSubmit} className="my-2 row align-items-center">
                <div className="d-flex justify-content-center mt-3">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Ingrese una nueva tarea..."
                        value={newTaskName}
                        onChange={(e) => setNewTaskName(e.target.value)}
                        required
                    />
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <button className="button-19">Agregar</button>
                    <Link to="/"><button className="button-19">Volver</button></Link>
                </div>
            </form>
        </Container>

    )
}
