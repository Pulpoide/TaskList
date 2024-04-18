import React from "react";
import { Tarea } from "./Tarea";
import { BsClipboard2CheckFill } from "react-icons/bs";
import '../App.css'

export const ListaTareas = ({ tareas, toggleTask, showCompleted = false }) => {

    const taskTableRows = (completed) => {

        return (
            tareas
                .filter(tarea => tarea.completed == completed)
                .map(tarea => (
                    <Tarea tarea={tarea} key={tarea.name} toggleTask={toggleTask} />
                ))
        )
    }

    return (
        <table className="table table-bordered">
            <thead className="table-dark">
                <tr>
                    <th scope="col" className="thIcon"><BsClipboard2CheckFill /></th>
                    <th scope="col" className="thTarea">TAREA</th>
                </tr>
            </thead>
            <tbody>
                {
                    taskTableRows(showCompleted)
                }
            </tbody>
        </table>
    )
}

