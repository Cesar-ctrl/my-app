import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Switch, Route,  Link } from "react-router-dom";

const Works = () => {

    const [works, setWorks] = React.useState([])
    const css = `
    .card {
      width: 18rem;
    }
  `

    const obtenerDAtos = async () =>{
        const data = await fetch("https://jsonplaceholder.typicode.com/users/")
        const trabajos = await data.json()
        console.log(trabajos)
        setWorks(trabajos)
    }

    useEffect(() =>{
        obtenerDAtos()
    }, [])

    return <div>
        <h1>Works</h1>
        <div className="card-group">
            <div className="card">
                <style>{css}</style>
                <img src={process.env.PUBLIC_URL + '/img/home.PNG'} alt="home" />
                <div className="card-body">
                    <p className="card-text">To increase my skills as a Full-Stack developer, I developed a social network using PHP, Laravel, and
Javascript. The project is deployed, you can upload images, comment on images, like images, view user
profiles and delete or edit comments on your own posts.</p>
                </div>
            </div>

            <a href="https://cesar-ctrl.github.io"className="card">
                <style>{css}</style>
                <img src={process.env.PUBLIC_URL + '/img/Dnd.PNG'} alt="home" />
                <div className="card-body">
                    <p className="card-text">Designed and developed a web guide about Dungeons and Dragons game, using HTML, CSS and
JavaScript, among other technologies. This project helped me to improve my layout skills, as well as my
javascript knowledge. It also allowed me to learn how to consume REST web services.</p>
                </div>
            </a>

            
            <a href="https://cesar-ctrl.github.io/proyecto2/"className="card">
                
                <img src={process.env.PUBLIC_URL +'/img'+ '/CrudTareas.PNG'} alt="home" />
                <div className="card-body">
                    <p className="card-text">Developed a CRUD of tasks that is connected to a database, everything that is not deleted stays in the database.
I've done it with JavaScript, React and Bootstrap, it has state hooks.</p>
                </div>
            </a>
            
            
        </div>
    </div>;
};
export default Works;