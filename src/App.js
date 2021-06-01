import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-dropdown/style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Escritorio from './components/Escritorio';
import Editar from './components/Editar';
import Usuario from './components/Usuario';
import NuevaLicenciaDeportista from './components/NuevaLicenciaDeportista';
import NuevaLicenciaEntrenador from './components/NuevaLicenciaEntrenador';
import NuevaLicenciaJuez from './components/NuevaLicenciaJuez';
import DeportistasClub from './components/DeportistasClub';
import NuevoDeportista from './components/NuevoDeportista';
import LicenciasDeportista from './components/LicenciasDeportista';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render={props => (<Login{...props} />)} />
          <Route path="/escritorio" exact render={props => (<Escritorio{...props} />)} />
          <Route path="/nuevaLicenciaDeportista" exact render={props => (<NuevaLicenciaDeportista{...props} />)} />
          <Route path="/nuevaLicenciaEntrenador" exact render={props => (<NuevaLicenciaEntrenador{...props} />)} />
          <Route path="/nuevaLicenciaJuez" exact render={props => (<NuevaLicenciaJuez{...props} />)} />
          <Route path="/nuevoDeportista" exact render={props => (<NuevoDeportista{...props} />)} />
          <Route path="/editar/:id" exact render={props => (<Editar{...props} />)} />
          <Route path="/usuario/:id" exact render={props => (<Usuario{...props} />)} />
          <Route path="/deportistas/:id" exact render={props => (<DeportistasClub{...props} />)} />
          <Route path="/licenciaDeportistas/:id" exact render={props => (<LicenciasDeportista{...props} />)} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
