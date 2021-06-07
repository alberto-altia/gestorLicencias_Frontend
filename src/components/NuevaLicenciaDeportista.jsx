import axios from 'axios';
import React from 'react';
import '../assets/css/Header.css';
import '../assets/css/Editar.css';
import '../assets/css/NuevaLicencia.css';

import { Apiurl } from '../service/apirest';


class NuevaLicenciaDeportista extends React.Component {

    state = {
       form:{
        "nombreEspecialidad":"",
        "codPersona": JSON.parse(atob(localStorage.getItem('jwt').split('.')[1])).userId,
        "nivel":"",
        "esDeportista":true,
        "esEntrenador":false,
        "esJuez":false,
        "fechaActivacion":""
       },
       
       error: false,
       errorMsg: ""     
    }

    managerSubmit = e => {
        e.preventDefault();
    }

    managerButton = () => {
        let url = Apiurl + "nuevaLicencia";
        axios.post(url, this.state.form)
            .then(response => {
                if(response.status === 200){
                    console.log(response)
                    this.props.history.push("/escritorio");
                }else{
                    console.log(response)
                    this.setState({
                        error: true,
                        errorMsg: "Esta licencia ya existe"
                    })
                }
            }).catch(error =>{
                console.log(error)
                this.setState({
                    error: true,
                    errorMsg: "Esta licencia ya existe!"
                })
            })
        
    }

    redirigir = () => {
        let id = localStorage.getItem('idPersona');
        this.props.history.push("/usuario/" + id);
    }

    managerChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
        console.log(this.state.form)
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
                                <a className="dropdown-item" href="">Licencia Deportista</a>
                                <a className="dropdown-item" href="nuevaLicenciaEntrenador">Licencia Entrenador</a>
                                <a className="dropdown-item" href="nuevaLicenciaJuez">Licencia Juez</a>
                            </div>
                    </div>
                </div>
                <div className="header-right">
                    <a className="navbar-brand" href="/">Log out   <i className="fas fa-user-times"></i></a>
                </div>
            </nav>

                <div className="tableContainer">
                    <div className="titulo">
                        <h3>Activar Licencia Deportista</h3>
                    </div>

                    <div className="containerForm">
                        <br />
                        <form className="form-horizontal" onSubmit={this.managerSubmit}>
                            <div className="row">
                                    <label className="col-md-2 control-label">Especialidad</label>
                                    <select className="form-select" aria-label="Especialidad" name="nombreEspecialidad"  onChange={this.managerChange}>
                                        <option selected>Especialidad</option>
                                        <option value="Latinos">Latinos</option>
                                        <option value="Estandard">Standard</option>
                                        <option value="Caribeños">Caribeños</option>
                                        <option value="Hip Hop">Hip Hop</option>
                                        <option value="Fit Kid">Fit Kid</option>
                                        <option value="Line Dance">LineDance</option>
                                        <option value="Twirling">Twirling</option>
                                    </select>
                            </div>
                            <div className="row">
                                <label className="col-md-2 control-label">Nivel de la Especialidad</label>
                                    <input type="text" className="form-control" name="nivel" placeholder="nivel" onChange={this.managerChange}
                                    />
                            </div> 
                            <br/>
                            <button type="submit" className="btn btn-primary" style={{margin:"10px"}} onClick={this.managerButton}>Activar</button>
                            <a className="btn btn-dark" href="/escritorio" style={{margin:"10px"}}>Salir</a>   
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

export default NuevaLicenciaDeportista