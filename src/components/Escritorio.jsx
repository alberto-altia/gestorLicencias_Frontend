import React from 'react';
import Header from '../template/Header';
import { Apiurl } from '../service/apirest';
import axios from 'axios';
import '../assets/css/Escritorio.css';

class Escritorio extends React.Component {

    state = {
        personas: [],
        clubs: [],
        licenciasActivadas: []
    }

    clickPersona(id) {
        this.props.history.push("editar/" + id);
    }

    componentDidMount() {
        let personaId = localStorage.getItem('idPersona');
        let url = Apiurl + "clubs/" + personaId;
        axios.get(url)
            .then(response => {
                this.setState({
                    clubs: response.data
                })
            });
        url = Apiurl + "licencias/" + personaId;
        axios.get(url)
            .then(response => {
                console.log(response)
                this.setState({
                    licenciasActivadas: response.data
                })
            });
    }
    clickClub(id) {
        this.props.history.push("/deportistas/" + id)
    }
    clickLicencia(id) {

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
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <button data-entry-number="2" class="btn btn-outline-danger " type="button" aria-label="Delete" data-toggle="modal" data-target="#delete-modal" title="Delete">
                        Delete
                    </button>

                    <div class="modal fade" id="delete-modal" tabindex="-1" role="dialog" aria-labelledby="modalTitle"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalTitle">Desactivar Licencia</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                   Deseas desactivar esta licencia ? <span id="entry-num"></span>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button id="delete-confirm" type="button" class="btn btn-danger">Si</button>
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