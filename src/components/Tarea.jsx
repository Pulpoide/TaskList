import React from "react";
import '../App.css'

export const Tarea = ({ tarea, toggleTask }) => {
    return (
        <tr>
            <td className="tdInput">
                <input
                    className="checkBoxList"
                    type="checkbox"
                    checked={tarea.completed}
                    onChange={() => toggleTask(tarea)}
                />
            </td>
            <td>
                {tarea.name}
            </td>
        </tr>
    );
}


