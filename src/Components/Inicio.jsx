import React from 'react';

const Inicio = () => {
  const css = `
  .card {
    width: 18rem;
  }
`
  
  return <div>
    <h1>Hello, my name is César Amado</h1>
    <p>I'm a Web Development Student with strong HTML5, CSS, Bootstrap, JavaScript, React, Laravel, PHP, Flask, Python and SQL skills and eager
to learn new technologies. Consider myself a full stack developer, have knowledge of both backend and frontend development, handling
any part of the process with ease. Effective as a team player and able to work on his own, also adapt to new work situations and
environment.</p>



  <div className="card-group">
    <div className="card" >
      <style>css</style>
      <div className="card-body">
        <h5 className="card-title">Front-end Developer</h5>
        <p className="card-text">Description</p>
        <h6 className="card-subtitle mb-2 ">Languages I speak:</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">HTML</li>
          <li class="list-group-item">CSS</li>
          <li class="list-group-item">JavaScript</li>
        </ul>
        <br/>
        <h6 className="card-subtitle mb-2 ">Dev Tools:</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Bootstrap</li>
          <li class="list-group-item">Sass</li>
          <li class="list-group-item">Parcel</li>
        </ul>
        
      </div>
    </div>

    <div className="card" >
      <style>css</style>
      <div className="card-body">
        <h5 className="card-title">Back-end Developer</h5>
        <p className="card-text">Description</p>
        <h6 className="card-subtitle mb-2 ">Languages I speak:</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">PHP</li>
          <li class="list-group-item">Python</li>
          <li class="list-group-item">Java</li>
          <li class="list-group-item">SQL</li>
        </ul>
        <br/>
        <h6 className="card-subtitle mb-2 ">Dev Tools:</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Laravel</li>
          <li class="list-group-item">Flask</li>
          <li class="list-group-item">Spring boot MVC</li>
        </ul>
        
      </div>
    </div>

  </div>
</div>;
};
export default Inicio;