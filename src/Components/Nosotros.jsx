import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Switch, Route,  Link } from "react-router-dom";

const Nosotros = () => {

    const [users, setUsers] = React.useState([])

    const obtenerDAtos = async () =>{
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
            users.map(item => (
                <li key = {item.id}>
                    <Link to = {`/nosotros/${item.id}`}>
                        {item.name} - {item.email}
                    </Link>
                </li>
            ))
            }
        </ul>
    </div>;
};
export default Nosotros;
