import React from "react";
import { BrowserRouter as Router, Routes, Switch, Route,  Link } from "react-router-dom";
import Inicio from "./Components/Inicio"
import Contacto from "./Components/Contacto"
import Work from "./Components/Work"
import Nosotros from "./Components/Nosotros"
import Usuarios from "./Components/Usuarios"
import Formacion from "./Components/Formacion";

function App() {
    return (
        <Router>
            <div className="container mt-5">
                <div className="btn-group">
                    <Link className="btn btn-datk btn-sm" to ="/">
                        Inicio
                    </Link>
                    <Link className="btn btn-datk btn-sm" to ="/formacion">
                        Formacion
                    </Link>
                    <Link className="btn btn-datk btn-sm" to ="/work">
                        Work
                    </Link>
                    <Link className="btn btn-datk btn-sm" to ="/contacto">
                        Contacto 
                    </Link>
                </div>

                <hr/>
                <Routes>
                
                    <Route path="/contacto" element={<Contacto/>}/>
                    <Route path="/formacion" element={<Formacion/>}/>
                    <Route path="/work" element={<Work/>}/>
                    
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/nosotros/:id" element={<Usuarios/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
