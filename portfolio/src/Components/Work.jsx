import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Switch, Route,  Link } from "react-router-dom";

const Works = () => {
    
    const css = `
    .card {
      width: 18rem;
    }
  `


    return <div>
        <h1>Works</h1>
        <div className="card-group">
            <a href='https://github.com/Cesar-ctrl/cesarinsta' className="card">
                <style>{css}</style>
                <img src={process.env.PUBLIC_URL + '/img/home.PNG'} alt="home" />{/** process.env.PUBLIC_URL trae la url baseo url pública. */}
                <div className="card-body">
                    <p className="card-text">To increase my skills as a Full-Stack developer, I developed a social network using PHP, Laravel, and
Javascript. The project is deployed, you can upload images, comment on images, like images, view user
profiles and delete or edit comments on your own posts.</p>
                </div>
            </a>

            <a href="https://cesar-ctrl.github.io"className="card">
                <style>{css}</style>
                <img src={'my-app/img/Dnd.PNG'} alt="home" />
                <div className="card-body">
                    <p className="card-text">Designed and developed a web guide about Dungeons and Dragons game, using HTML, CSS and
JavaScript, among other technologies. This project helped me to improve my layout skills, as well as my
javascript knowledge. It also allowed me to learn how to consume REST web services.</p>
                </div>
            </a>

            
            <a href="https://cesar-ctrl.github.io/proyecto2/"className="card">
                
                <img src={process.env.PUBLIC_URL +'/img/CrudTareas.PNG'} alt="27" />
                <div className="card-body">
                    <p className="card-text">Developed a CRUD of tasks that is connected to a database, everything that is not deleted stays in the database.
I've done it with JavaScript, React and Bootstrap, it has state hooks.</p>
                </div>
            </a>
            
            
        </div>
    </div>;
};
export default Works;