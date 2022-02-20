import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Usuarios = () => {    

    const {id} = useParams();
    const [user, setUsers] = React.useState([])

    

    useEffect(() =>{
        const obtenerDAtos = async () =>{
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const usuario = await data.json()
            setUsers(usuario)
        }
        obtenerDAtos()
    }, [id])

  return <div>
      <h1>Usuarios</h1>
      {
          <ul>
              <li>{user.name}</li>
              <li>{user.username}</li>
              <li>{user.email}</li>
          </ul>
      }
  </div>;
};
export default Usuarios;



