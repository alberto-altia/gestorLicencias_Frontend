import axios from 'axios';
import React from 'react';
import '../assets/css/Header.css';

import { Apiurl } from '../service/apirest';


class Editar extends React.Component {

    state = {
        form: {
            "nombreApellidos": "",
            "fechaNacimiento": "",
            "telefono": "",
            "email": "",
            "codClub": "",
            "dni": "",
            "usuario": "",
            "password": "",
            "numLicenciaDeportista": "",
            "numLicenciaEntrenador": "",
            "numLicenciaJuez": "",
            "codClub": "",
            "idPersona": ""
        },
        error: false,
        errorMsg: ""
    }

    managerChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    put = () => {
        let url = Apiurl + "editarPersona";
        axios.post(url, this.state.form)
            .then(response => {
                let id = localStorage.getItem('idPersona');
                this.props.history.push("/usuario/" + id);
            })
    }

    delete = () => {
        let personaId = this.props.match.params.id;
        let url = Apiurl + "eliminarPersona/" + personaId;
        axios.delete(url)
            .then(response => {
                console.log(response)
                this.props.history.push("/escritorio");
            })
    }

    redirigir = () => {
        let id = localStorage.getItem('idPersona');
        this.props.history.push("/usuario/" + id);
    }

    managerSubmit = e => {
        e.preventDefault();
    }


    componentDidMount() {
        let id = this.props.match.params.id;
        let url = Apiurl + "personas/" + id;
        axios.get(url)
            .then(response => {

                this.setState({
                    form: {
                        nombreApellidos: response.data.nombreApellidos,
                        dni: response.data.dni,
                        fechaNacimiento: response.data.fechaNacimiento,
                        telefono: response.data.telefono,
                        email: response.data.email,
                        usuario: response.data.usuario,
                        password: response.data.password,
                        numLicenciaDeportista: response.data.numLicenciaDeportista,
                        numLicenciaEntrenador: response.data.numLicenciaEntrenador,
                        numLicenciaJuez: response.data.numLicenciaJuez,
                        codClub: response.data.codClub,
                        idPersona: response.data.idPersona
                    }

                });
            })

    }

    render() {
        const form = this.state.form;
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="header-left">
                    <a href="/escritorio"><img id="imagen" className="logo horizontal-logo" src="https://image.flaticon.com/icons/png/32/1472/1472035.png" alt="forecastr logo" ></img></a>
                    <div className="menu"> 
                        <a className="navbar-brand" onClick={() => this.redirigir()}>Datos Usuario</a>
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
            </nav>
                <div className="container">
                    <h3>Editar Persona</h3>
                </div>

                <div className="container">
                    <br />
                    <form className="form-horizontal" onSubmit={this.managerSubmit}>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Nombre y Apellido</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="nombreApellidos" placeholder="nombreApellidos"
                                        value={form.nombreApellidos}
                                        onChange={this.managerChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">DNI</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="dni" placeholder="dni"
                                        value={form.dni}
                                        onChange={this.managerChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Fecha Nacimiento</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="fechaNacimiento" placeholder="Fecha Nacimiento"
                                        value={form.fechaNacimiento}
                                        onChange={this.managerChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Email</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="email" placeholder="email"
                                        value={form.email}
                                        onChange={this.managerChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Telefono</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="telefono" placeholder="telefono"
                                        value={form.telefono}
                                        onChange={this.managerChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Usuario</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="usuario" placeholder="usuario"
                                        value={form.usuario}
                                        onChange={this.managerChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Contraseña</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="password" placeholder="Contraseña"
                                        value={form.password}
                                        onChange={this.managerChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <br />
                        <button type="submit" className="btn btn-primary" style={{ margin: "10px" }} onClick={() => this.put()}>Guardar</button>
                        <button type="submit" className="btn btn-danger" style={{ margin: "10px" }} onClick={() => this.delete()}>Eliminar</button>
                        <a className="btn btn-dark" href="/escritorio" style={{ margin: "10px" }}>Salir</a>
                    </form>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Editar