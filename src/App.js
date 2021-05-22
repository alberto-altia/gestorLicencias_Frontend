import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';


import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Nuevo from './components/Nuevo';

function App() {
  return (
    <React.Fragment>
       <Router>
         <Switch>
           <Route path="/" exact render={props=> ( <Login{...props}/>)}/>
           <Route path="/dashboard" exact render={props=> ( <Dashboard{...props}/>)}/>
           <Route path="/nuevo" exact render={props=> ( <Nuevo{...props}/>)}/>
         </Switch>
       </Router>
    </React.Fragment>
  );
}

export default App;
