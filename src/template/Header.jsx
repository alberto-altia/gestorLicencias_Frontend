import React from 'react';
<<<<<<< HEAD
import '../assets/css/Header.css';


class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="header-left">
                    <a href="/escritorio"><img id="imagen" className="logo horizontal-logo" src="https://image.flaticon.com/icons/png/32/1472/1472035.png" alt="forecastr logo" ></img></a>
                    <div className="menu"> 
                        <a className="navbar-brand" href={"/usuario/" + localStorage.getItem('idPersona')}>Datos Usuario</a>
                    </div>
                    
                    <div className="btn-group">
                            <a type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Activar Licencias</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Licencia Deportista</a>
                                <a className="dropdown-item" href="#">Licencia Entrenador</a>
                                <a className="dropdown-item" href="#">Licencia Juez</a>
                            </div>
                    </div>
                </div>
                <div className="header-right">
                    <a className="navbar-brand" href="/">Log out   <i class="fas fa-user-times"></i></a>
                </div>
=======

class Header extends React.Component {

    render() {
        return ( 
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a title="Los Tejos" href="/escritorio"><img className="logo horizontal-logo" style={{margin:"10px"}} src="https://image.flaticon.com/icons/png/32/1472/1472035.png" alt="forecastr logo" ></img></a>
                <a className="navbar-brand" style={{margin:"10px"}} href={ "usuario/" + localStorage.getItem('idPersona')}>Datos Usuario</a>
                
                <div class="container-fluid">
                    
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Nueva Licencia
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/escritorio">Another action</a>
                        </div>
                </div>
                <a className="navbar-brand" style={{margin:"10px"}} href="/">Log out</a>
>>>>>>> 8095142a5af2a0d82c79aad6f49798b8a9399d07
            </nav>
        );
    }
}
export default Header;