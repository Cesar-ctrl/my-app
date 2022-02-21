import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Usuarios = () => {    

    // Declaración de una variable de estado que llamaremos "user"
    const {id} = useParams();
    const [user, setUsers] = React.useState([])
    //  Si se quiere actualizar el valor de count actual, podemos llamar a setCount
    

    useEffect(() =>{
        const obtenerDAtos = async () =>{
            //Aqui se hace una función asincrona que llama a una api para que devuelva usuarios con la id especificada
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



