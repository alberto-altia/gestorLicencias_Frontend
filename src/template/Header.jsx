import React from 'react';

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
            </nav>
        );
    }
}
export default Header;