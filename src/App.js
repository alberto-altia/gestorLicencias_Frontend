import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';


import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/Login';
import Escritorio from './components/Escritorio';
import Nuevo from './components/Nuevo';
import Editar from './components/Editar';

function App() {
  return (
    <React.Fragment>
       <Router>
         <Switch>
           <Route path="/" exact render={props=> ( <Login{...props}/>)}/>
           <Route path="/escritorio" exact render={props=> ( <Escritorio{...props}/>)}/>
           <Route path="/nuevo" exact render={props=> ( <Nuevo{...props}/>)}/>
           <Route path="/editar/:id" exact render={props=> ( <Editar{...props}/>)}/>
         </Switch>
       </Router>
    </React.Fragment>
  );
}

export default App;
