import axios from 'axios';
import React from 'react';

import {Apiurl} from '../service/apirest';

import Header from '../template/Header';

class Usuario extends React.Component{

    state = {
       form:{
        "nombreApellidos": "",
        "fechaNacimiento": "",
        "telefono": "",
        "email": "",
        "codClub":"" ,
        "dni": "",
        "usuario":"",
        "password":"",
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
    componentDidMount(){
        let personaId = localStorage.getItem('idPersona');
        let url = Apiurl + "personas/" + personaId;
        axios.get(url)
        .then(response =>{
            
            this.setState({
                form:{
                    nombreApellidos : response.data.nombreApellidos,
                    dni : response.data.dni,
                    fechaNacimiento : response.data.fechaNacimiento,
                    telefono : response.data.telefono,
                    email : response.data.email,
                    usuario : response.data.usuario,
                    password : response.data.password,
                    numLicenciaDeportista : response.data.numLicenciaDeportista, 
                    numLicenciaEntrenador : response.data.numLicenciaEntrenador,
                    numLicenciaJuez : response.data.numLicenciaJuez,
                    codClub : response.data.codClub,
                    idPersona : response.data.idPersona
                }
                
            });
        })
    }

    delete = ()=>{
        let personaId = this.props.match.params.id;
        let url = Apiurl + "eliminarPersona/" + personaId ;
        axios.delete(url)
        .then(response =>{
            console.log(response)
            this.props.history.push("/");
        })
    }

    clickEditar(id){
        this.props.history.push("/editar/" + id);
    }

    render(){
        const form = this.state.form;
        return(
            <React.Fragment>
                <Header></Header>
                <br/><br/><br/>
                <div className="container">
                    <h3>Datos Persona</h3>
                </div>

                <div className="container">
                    <br/>
                    <form className="form-horizontal" onSubmit={this.managerSubmit}>
                        <div className="row">
                                <div className="col-sm-6">
                                        <label className="col-md-2 control-label">Nombre y Apellido</label>
                                        <div className="col-md-8">
                                                <input type="text" className="form-control" name="nombreApellidos" placeholder="nombreApellidos"
                                                    value={form.nombreApellidos}
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
                                            />
                                    </div>
                            </div>
                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Fecha Nacimiento</label>
                                <div className="col-md-8">
                                        <input type="text" className="form-control" name="fechaNacimiento" placeholder="Fecha Nacimiento"
                                            value={form.fechaNacimiento}
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
                                        />
                                </div>
                            </div> 
                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Telefono</label>
                                <div className="col-md-8">
                                        <input type="text" className="form-control" name="telefono" placeholder="telefono"
                                            value={form.telefono}
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Numero Licencia Deportista</label>
                                <div className="col-md-8">
                                        <input type="text" className="form-control" name="usuario" placeholder="numero licencia"
                                            value={form.numLicenciaDeportista}
                                        />
                                </div>
                            </div> 
                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Numero Licencia Entrenador</label>
                                <div className="col-md-8">
                                        <input type="text" className="form-control" name="password" placeholder="numero licencia"
                                            value={form.numLicenciaEntrenador}
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Numero Licencia Juez</label>
                                <div className="col-md-8">
                                        <input type="text" className="form-control" name="usuario" placeholder="numero licencia"
                                            value={form.numLicenciaJuez}
                                        />
                                </div>
                            </div>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-success"style={{margin:"10px"}} onClick={()=>this.clickEditar(localStorage.getItem('idPersona'))}>Editar</button>
                        <button type="submit" className="btn btn-danger"style={{margin:"10px"}} onClick={()=>this.delete()}>Eliminar</button>  
                        <a className="btn btn-dark" href="/escritorio" style={{margin:"10px"}}>Salir</a>   
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Usuario