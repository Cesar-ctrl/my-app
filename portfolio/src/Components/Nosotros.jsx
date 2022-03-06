import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Switch, Route,  Link } from "react-router-dom";
//Eliminar

//cambiar por juego
const Nosotros = () => {

    // Declaración de una variable de estado que llamaremos "users"
    const [users, setUsers] = React.useState([])

    const obtenerDAtos = async () =>{
        // Llamamos a la api para que nos devuelva una lista con diccionarios de los ususarios 
        const data = await fetch("https://jsonplaceholder.typicode.com/users/")
        const usuarios = await data.json()
        console.log(usuarios)
        setUsers(usuarios)
    }

    useEffect(() =>{
        obtenerDAtos()
    }, [])

    return <div>
        <h1>Nosotros</h1>
        <ul>
            {
            //Crea un enlace por cada usuario usando la id de cada uno
            users.map(item => (
                <li key = {item.id}>
                    <Link to = {`/nosotros/${item.id}`}>
                        {/**Y se crea elementos en el html con el nombre y email */}
                        {item.name} - {item.email}
                    </Link>
                </li>
            ))
            }
        </ul>
    </div>;
};
export default Nosotros;
