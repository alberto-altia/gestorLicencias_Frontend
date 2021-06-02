import React from 'react';
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
                                <a className="dropdown-item" href="/nuevaLicenciaDeportista">Licencia Deportista</a>
                                <a className="dropdown-item" href="/nuevaLicenciaEntrenador">Licencia Entrenador</a>
                                <a className="dropdown-item" href="/nuevaLicenciaJuez">Licencia Juez</a>
                            </div>
                    </div>
                </div>
                <div className="header-right">
                    <a className="navbar-brand" href="/">Log out   <i class="fas fa-user-times"></i></a>
                </div>
            </nav>
        );
    }
}
export default Header;