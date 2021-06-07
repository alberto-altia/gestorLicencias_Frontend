import axios from 'axios';
import React from 'react';
import '../assets/css/Header.css';
import '../assets/css/NuevoDeportista.css';

import { Apiurl } from '../service/apirest';


class NuevoDeportista extends React.Component {

    state = {
       form:{
        "nombreApellidos": "",
        "fechaNacimiento": "",
        "telefono": "",
        "email": "",
        "numLicenciaDeportista": "",
        "numLicenciaEntrenador": "",
        "numLicenciaJuez": "",
        "codClub": localStorage.getItem('codClub') ,
        "dni": "",
        "usuario":"",
        "password":""
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
    guardar = () => {
        let url = Apiurl + "nuevoDeportista";
        console.log(this.state.form)
        axios.post(url, this.state.form)
            .then(response => {
                console.log(response)
                let id = localStorage.getItem('codClub');
                this.props.history.push("/deportistas/" + id)
            }).catch(error =>{
                this.setState({
                    error: true,
                    errorMsg: "Usuario existente!"
                })
            })
    }

    redirigir = () => {
        let id = localStorage.getItem('idPersona');
        this.props.history.push("/usuario/" + id);
    }

    managerSubmit = e => {
        e.preventDefault();
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
                        <h3>Añadir Nuevo Deportista</h3>
                    </div>

                    <div className="containerForm">
                        <br />
                        <form className="form-horizontal" onSubmit={this.managerSubmit}>
                            <div className="row">
                                    <label className="col-md-2 control-label">Nombre y Apellido</label>
                                    <input type="text" className="form-control" name="nombreApellidos" placeholder="nombreApellidos"
                                        onChange={this.managerChange}
                                    />
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <label className="col-md-2 control-label">DNI</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="dni" placeholder="dni"
                                            onChange={this.managerChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="col-md-2 control-label">Fecha Nacimiento</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="fechaNacimiento" placeholder="Fecha Nacimiento"
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
                                            onChange={this.managerChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="col-md-2 control-label">Telefono</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="telefono" placeholder="telefono"
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
                                            onChange={this.managerChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="col-md-2 control-label">Contraseña</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="password" placeholder="Contraseña"
                                            onChange={this.managerChange}
                                        />
                                    </div>
                                </div>
                            </div>
                               
                            <button type="submit" className="btn btn-primary" style={{margin:"10px"}} onClick={()=>this.guardar()}>Guardar</button>
                            <a className="btn btn-dark" href={"/deportistas/" + localStorage.getItem('codClub')} style={{margin:"10px"}}>Cancelar</a>   
                        </form>
                        {this.state.error === true &&
                            <div className="alert alert-danger" role="alert">
                            {this.state.errorMsg}
                        </div>
                        } 
                         
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NuevoDeportista