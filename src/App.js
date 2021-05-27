import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-dropdown/style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Escritorio from './components/Escritorio';
import Nuevo from './components/Nuevo';
import Editar from './components/Editar';
import Usuario from './components/Usuario';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render={props => (<Login{...props} />)} />
          <Route path="/escritorio" exact render={props => (<Escritorio{...props} />)} />
          <Route path="/nuevo" exact render={props => (<Nuevo{...props} />)} />
          <Route path="/editar/:id" exact render={props => (<Editar{...props} />)} />
          <Route path="/usuario/:id" exact render={props => (<Usuario{...props} />)} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
