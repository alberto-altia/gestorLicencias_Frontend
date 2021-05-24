import axios from 'axios';
import React from 'react';

import {Apiurl} from '../service/apirest';

import Header from '../template/Header';

class Editar extends React.Component{

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

    put =()=>{
        let url = Apiurl + "editarPersona";
        axios.post(url,this.state.form)
        .then(response=>{
            console.log(response)
        })
    }

    delete = ()=>{
        let url = Apiurl + "eliminarPersona" ;
        let personaId = this.props.match.params.id;
        
        console.log(personaId)
        axios.delete(url,personaId)
        .then(response =>{
            console.log(response)
            this.props.history.push("/escritorio");
        })
    }

    managerSubmit = e=>{
        e.preventDefault();
    }


    componentDidMount(){
        let id = this.props.match.params.id;
        let url = Apiurl + "personas/" + id;
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

    render(){
        const form = this.state.form;
        return(
            <React.Fragment>
                <Header></Header>
                <br/><br/><br/>
                <div className="container">
                    <h3>Editar Persona</h3>
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
                        
                        <br/>
                        <button type="submit" className="btn btn-primary" style={{margin:"10px"}} onClick={()=>this.put()}>Editar</button>
                        <button type="submit" className="btn btn-danger"style={{margin:"10px"}} onClick={()=>this.delete()}>Eliminar</button> 
                        <a className="btn btn-dark" href="/escritorio" style={{margin:"10px"}}>Salir</a>   
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Editar