import React, {useState} from 'react';
import { nanoid } from 'nanoid'

function CrudTareas() {

    const [tarea, setTarea] = useState("")
    const [tareas, setTareas] = useState([])
    const [modoEdicion, setmodoEdicion] = useState(false)
    const [id, setId] = useState("")
    const [error, setError]= useState(null)

    const agregarTarea = e => {//Funcion para agregar una tarea
        e.preventDefault()
        if(!tarea.trim()) {
            setError("Escribe algo.....")
            return
        }
        setTareas([    
            ...tareas,//prepara la lista de tareas
            {id:nanoid(), nombreTarea:tarea}//añadimos la tarea nueva
        ])
        setTarea("")//Limpiamos el input
        setError(null)
    }

    const eliminarTarea = (id) => {
        const arrayFilter= tareas.filter(item=>item.id!==id)//
        setTareas(arrayFilter)
    }

    const activarModoEdicion = (item) => {
        setmodoEdicion(true)
        setTarea(item.nombreTarea)
        setId(item.id)

    }

    const editarTarea = e => {
        e.preventDefault()
        if(!tarea.trim()) {
        setError("Escribe algo.....")
        return
        }
        const arrayEditado= tareas.map(
        item => item.id===id? {id:id, nombreTarea:tarea}:item
        )
        console.log(id);

        setTareas(arrayEditado)
        setmodoEdicion(false)
        setTarea("")
        setId("")
        setError(null)

    }


        return (
            <div className="container mt-5">
            <h1 className="text-center">CRUD de Tareas</h1>
            <hr/>
            <div className="row mt-2">
            <div className="col-8">
                <h4 className="text-center">Lista tareas</h4>
                <ul className="list-group">
                {
                tareas.map (item=>
                    <li className="list-group-item" key={item.id}>
                    <span className="lead">{item.nombreTarea}</span>
                    <button 
                        className="btn btn-danger btn-sm float-end"
                        onClick={e=>eliminarTarea(item.id)}
                        >
                        Eliminar
                    </button>
                    <button
                    className="btn btn-warning btn-sm float-end mx-2"
                    onClick={e=>activarModoEdicion(item)}
                    >
                        Editar
                    </button>
                    </li>              
                )
                }
                </ul>
            </div>
            <div className="col-4">
            <h4 className="text-center">
                {
                modoEdicion? "Editar tareas": "Agregar tareas"
                }
                </h4>
            <form onSubmit={modoEdicion? editarTarea:agregarTarea}>
                <input 
                type="text" 
                className="form-control"
                placeholder="Introduce la tarea"
                onChange={e=> setTarea(e.target.value)}
                value={tarea}
                />
                {modoEdicion? (
                <button className="btn btn-warning w-100 mt-2">Guardar Cambios</button> 
                ):
                (<button className="btn btn-dark w-100 mt-2">Agregar</button> 
                )
                }
                {
                    error? <span className="text-danger mx-2">{error}</span>:null
                }
    
    
            </form>
            </div>
            </div>
        </div>
        );
    }

    export default CrudTareas;