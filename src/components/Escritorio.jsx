import React from 'react';
import Header from '../template/Header';
import {Apiurl} from '../service/apirest';
import axios from 'axios';
import '../assets/css/Escritorio.css';

class Escritorio extends React.Component{

    state={
        personas:[],
        clubs:[],
        licenciasActivadas:[]
    }

    clickPersona(id){
        this.props.history.push("editar/" + id);
    }

    componentDidMount(){
        let url = Apiurl + "personasEspecialidad";
        axios.get(url)
        .then(response => {
            this.setState({
                personas : response.data
            })
        });
        let personaId = localStorage.getItem('idPersona');
        url = Apiurl + "clubs/" + personaId;
        axios.get(url)
        .then(response => {
            this.setState({
                clubs : response.data
            })
        });
        url = Apiurl + "licencias/" + personaId;
        console.log(url)
        axios.get(url)
        .then(response => {
            console.log(response)
            this.setState({
                licenciasActivadas : response.data
            })
        });
    }
    render(){
        return(
            <React.Fragment>
                <Header></Header>
                <div className="tableContainer" id="left">
                    <div className="titulo">
                        <h3>Club Afiliado</h3>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">licenciaClub</th>
                            <th scope="col">nombreClub</th>
                            <th scope="col">fechaCreacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.clubs.map((value,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{value.licenciaClub}</td>
                                        <td>{value.nombreClub}</td>
                                        <td>{value.fechaCreacion}</td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
                </div>
                <div className="tableContainer" id="right">
                    <div className="titulo">
                        <h3>Licencias Activas</h3>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Nombre Especialidad</th>
                            <th scope="col">Nivel</th>
                            <th scope="col">Fecha Activacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.licenciasActivadas.map((value,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{value.nombreEspecialidad}</td>
                                        <td>{value.nivel}</td>
                                        <td>{value.fechaActivacion}</td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
                </div>
                <br/><br/><br/>
                {/* <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">codPersona</th>
                        <th scope="col">codEspecialidad</th>
                        <th scope="col">fechaActivacion</th>
                        <th scope="col">nivel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.personas.map((value,index)=>{
                            return(
                                <tr key={index} onClick={()=>this.clickPersona(value.codPersona)}>
                                    <td>{value.id}</td>
                                    <td>{value.codPersona}</td>
                                    <td>{value.codEspecialidad}</td>
                                    <td>{value.fechaActivacion}</td>
                                    <td>{value.nivel}</td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
                </div> */}
            </React.Fragment>
        );
    }
}

export default Escritorio;