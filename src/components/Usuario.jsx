import axios from 'axios';
import React from 'react';
import '../assets/css/Usuario.css';

import '../assets/css/Header.css';

import { Apiurl } from '../service/apirest';

class Usuario extends React.Component {

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
    componentDidMount() {
        let url = Apiurl + "datos-persona";
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
    clickEditar(id) {
        this.props.history.push("/editar/" + id);
    }

    render() {
        const form = this.state.form;
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="header-left">
                        <a href="/escritorio"><img id="imagen" className="logo horizontal-logo" src="https://image.flaticon.com/icons/png/32/1472/1472035.png" alt="forecastr logo" ></img></a>
                        <div className="menu">
                            <a className="navbar-brand" href="">Datos Usuario</a>
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
                        <a className="navbar-brand" href="/">Log out   <i className="fas fa-user-times"></i></a>
                    </div>
                </nav>

                <div className="tableContainer">
                    <div className="titulo">
                        <h3>Datos Persona</h3>
                    </div>
                    <div className="containerForm">
                        <br />
                        <form className="form-horizontal" onSubmit={this.managerSubmit}>
                            <div className="row">
                                <label className="col-md-2 control-label">Nombre y Apellido</label>
                                <input type="text" className="form-control" name="nombreApellidos" placeholder="nombreApellidos"
                                    value={form.nombreApellidos} disabled
                                />
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <label className="col-md-2 control-label">DNI</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="dni" placeholder="dni"
                                            value={form.dni} disabled
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="col-md-2 control-label">Fecha Nacimiento</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="fechaNacimiento" placeholder="Fecha Nacimiento"
                                            value={form.fechaNacimiento} disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label className="col-md-2 control-label">Email</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="email" placeholder="email"
                                            value={form.email} disabled
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="col-md-2 control-label">Telefono</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="telefono" placeholder="telefono"
                                            value={form.telefono} disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label className="col-md-2 control-label">Numero Licencia Deportista</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="usuario" placeholder="numero licencia"
                                            value={form.numLicenciaDeportista} disabled
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="col-md-2 control-label">Numero Licencia Entrenador</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="password" placeholder="numero licencia"
                                            value={form.numLicenciaEntrenador} disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label className="col-md-2 control-label">Numero Licencia Juez</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="usuario" placeholder="numero licencia"
                                            value={form.numLicenciaJuez} disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="titulo">
                                <button type="submit" className="btn btn-success" style={{ margin: "10px" }} onClick={() => this.clickEditar(localStorage.getItem('idPersona'))}>Editar</button>
                                <a className="btn btn-dark" href="/escritorio" style={{ margin: "10px" }}>Salir</a>
                            </div>

                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Usuario