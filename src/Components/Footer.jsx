import React from 'react'
import { BrowserRouter as Router, Routes, Switch, Route,  Link } from "react-router-dom";
import Inicio from "./Inicio"
import Contacto from "./Contacto"
import Work from "./Work"
import Usuarios from "./Usuarios"
import Formacion from "./Formacion";

const Footer = () => {
    return(
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            
            <ul className='nav col-md-4 mb-0 '>
                <li className="nav-item"><a href="#" className="nav-link px-2">Email: amadocesar02@gmail.com</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 ">Phone: +34 601 314 076</a></li>
                <li className="nav-item"><a href="https://www.linkedin.com/in/césar-amado-096087232/" className="nav-link px-2">LinkedIn: https://www.linkedin.com/in/césar-amado-096087232/</a></li>
            </ul> 
            
            
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item">
                    <a className="nav-link px-2 text-muted" to ="/">
                        Inicio
                    </a></li>
                <li className="nav-item">
                    <a className="nav-link px-2 text-muted" to ="/formacion">
                        Formacion
                    </a></li>
                <li className="nav-item">
                    <a className="nav-link px-2 text-muted" to ="/work">
                        Work
                    </a></li>
                <li className="nav-item">
                    <a className="nav-link px-2 text-muted" to ="/contacto">
                        Contacto 
                    </a></li>
                

                <hr/>
                
                
               
                
            </ul>
        
      </footer>
    )
}
export default Footer