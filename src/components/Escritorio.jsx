import React from 'react';
import Header from '../template/Header';
import { Apiurl } from '../service/apirest';
import axios from 'axios';
import '../assets/css/Escritorio.css';

class Escritorio extends React.Component {

    state = {
        personas: [],
        clubs: [],
        licenciasActivadas: [],
        licenciaSeleccionada : null
    }

    clickPersona(id) {
        this.props.history.push("editar/" + id);
    }

    componentDidMount() {
        let url = Apiurl + "mis-clubs";
        axios.get(url)
            .then(response => {
                this.setState({
                    clubs: response.data
                })
            });
        url = Apiurl + "mis-licencias";
        axios.get(url)
            .then(response => {
                console.log(response)
                this.setState({
                    licenciasActivadas: response.data
                })
            });
    }

    clickClub(id) {
        localStorage.setItem("codClub",id);
        this.props.history.push("/deportistas/" + id)
    }
    
    clickLicencia(id){
        console.log("Id" + id)
        this.setState({
            licenciaSeleccionada : id
        })
    }
    
    clickEliminar() {
        let url = Apiurl + "eliminarLicencias/" +  this.state.licenciaSeleccionada;
        console.log(url)
        axios.delete(url)
            .then(response => {
                console.log(response);
                window.location.reload(true);
            });
    }
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <div className="tableContainer" id="left">
                    <div className="titulo">
                        <h3>Club Afiliado</h3>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Numero Licencia</th>
                                <th scope="col">Nombre Club</th>
                                <th scope="col">Fecha Creacion</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.clubs.map((value, index) => {
                                return (
                                    <tr key={index} onClick={() => this.clickClub(value.idClub)}>
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
                                <th scope="col">Tipo Licencia</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.licenciasActivadas.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.nombreEspecialidad}</td> 
                                        <td>{value.nivel}</td>
                                        <td>{value.fechaActivacion}</td>
                                        <td>{value.tipoLicencia}</td>
                                        <td> <button data-entry-number="2" className="btn btn-outline-danger " type="button" aria-label="Delete" data-toggle="modal" data-target="#delete-modal" title="Delete" onClick={()=>this.clickLicencia(value.idLicencia)}>
                                                <i className="fa fa-trash"/>
                                            </button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="modal fade" id="delete-modal" tabIndex="-1" role="dialog" aria-labelledby="modalTitle"
                        aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalTitle">Desactivar Licencia</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                   Deseas desactivar esta licencia ? <span id="entry-num"></span>
                                
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button type="button" className="btn btn-danger" id="delete-confirm" onClick={()=>this.clickEliminar()}>Si</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Escritorio;