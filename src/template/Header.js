import React from 'react';
import icono from '../assets/img/gestion.png';

class Header extends React.Component {

    render() {
        return ( 
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <img className="logo horizontal-logo" src="https://image.flaticon.com/icons/png/32/1085/1085748.png" alt="forecastr logo"></img>
                <a className="navbar-brand" href={ "usuario/" + localStorage.getItem('idPersona')}>Datos Usuario</a>
                <a className="navbar-brand" href="/">Log out</a>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                    
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                        <a class="nav-link" href="/escritorio">hola</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                            <a class="dropdown-item" href="/escritorio">escritorio</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown3">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;