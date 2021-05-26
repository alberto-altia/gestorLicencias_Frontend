import React from 'react';

class Header extends React.Component {
    render() {
        return ( 
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href={"usuario/" + localStorage.getItem('idPersona')}>Datos Usuario</a>
                <a className="navbar-brand" href="/">Log out</a>
            </nav>
        );
    }
}
export default Header;