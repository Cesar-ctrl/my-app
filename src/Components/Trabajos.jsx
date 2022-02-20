import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Trabajos = () => {    

    const {id} = useParams();
    const [work, setWorks] = React.useState([])

    

    useEffect(() =>{
        const obtenerDAtos = async () =>{
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const trabajo = await data.json()
            setWorks(trabajo)
        }
        obtenerDAtos()
    }, [id])

  return <div>
      <h1>Trabajos</h1>
      {
          <ul>
              <li>{work.name}</li>
              <li>{work.workname}</li>
              <li>{work.email}</li>
          </ul>
          
      }
      
  </div>;
};
export default Trabajos;
