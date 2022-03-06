import React from "react";
import { BrowserRouter as Router, Routes, Switch, Route,  Link } from "react-router-dom";
import Inicio from "./Components/Inicio"
import Contacto from "./Components/Contacto"
import Work from "./Components/Work"
import Nosotros from "./Components/Nosotros"
import Usuarios from "./Components/Usuarios"
import Formacion from "./Components/Formacion";
import ParticleBackground from "./ParticleBackground";


//Importamos todos los Componentes que hemos creado o vamos a usar
//React Router proporciona un <Link> componente para crear enlaces en su aplicación. 
//Donde sea que renderice un <Link>, se representará un ancla <a> en su documento HTML.
function App() {
  return(
    <Router>
      <ParticleBackground />
      <div className="container mt-5">
        <header className="btn-group">
          <Link className="btn btn-dark btn-sm" to="/inicio">
            Inicio
          </Link>
          <Link className="btn btn-dark btn-sm" to="/formacion">
            Formacion
          </Link>
          <Link className="btn btn-dark btn-sm" to="/work">
            Work
          </Link>
          <Link className="btn btn-dark btn-sm" to="/contacto">
            Contacto
          </Link>
          <Link className="btn btn-dark btn-sm" to="/nosotros">
            Nosotros
          </Link>
        </header>

        

        <hr />
        <Routes>
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/work" element={<Work />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros/:id" element={<Usuarios />} />
        </Routes>

      </div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <ul className='nav col-md-4 mb-0 '>
          <li className="nav-item"><a href="#" className="nav-link px-2">Email: amadocesar02@gmail.com</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 ">Phone: +34 601 314 076</a></li>
          <li className="nav-item"><a href="https://www.linkedin.com/in/césar-amado-096087232/" className="nav-link px-2">LinkedIn: https://www.linkedin.com/in/césar-amado-096087232/</a></li>
        </ul>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link className="nav-link px-2 text-muted" to="/">
              Inicio
            </Link></li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-muted" to="/formacion">
              Formacion
            </Link></li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-muted" to="/work">
              Work
            </Link></li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-muted" to="/contacto">
              Contacto
            </Link></li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-muted" to="/nosotros">
              Nosotros
            </Link></li>
        </ul>

      </footer>
          
      
    </Router>
      
  );
}


export default App;
