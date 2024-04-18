
export const VisibilityControl = ({ setshowCompleted, cleanTasks, isChecked }) => {

    const handleDelete = () => {
        if (window.confirm('¿Está seguro que desea elimiar las tareas completadas?')) {
            cleanTasks()
        }
    }

    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type='checkbox'
                    onChange={(e) => setshowCompleted(e.target.checked)}
                    checked={isChecked}
                />
                <label>Mostrar tareas hechas</label>
            </div>
            <button className="button-18" onClick={handleDelete}>
                Eliminar Todas
            </button>
        </div>
    )
}