import axios from 'axios';
import React from 'react';
import '../assets/css/Header.css';
import '../assets/css/Editar.css';
import '../assets/css/NuevaLicencia.css';

import { Apiurl } from '../service/apirest';
import Header from '../template/Header';


class LicenciasDeportista extends React.Component {

    state = {
        form: {
            "nombreEspecialidad": "",
            "codPersona": this.props.match.params.id,
            "nivel": "",
            "esDeportista": true,
            "esEntrenador": false,
            "esJuez": false,
            "fechaActivacion": ""
        },
        licenciasActivadas: [],
        error: false,
        errorMsg: ""
    }

    managerSubmit = e => {
        e.preventDefault();
    }
    componentDidMount() {
        let personaId = this.props.match.params.id;
        let url = Apiurl + "licencias/" + personaId;
        axios.get(url)
            .then(response => {
                console.log(response)
                this.setState({
                    licenciasActivadas: response.data
                })
            })
    }

    managerButton = () => {
        let url = Apiurl + "nuevaLicencia";
        console.log(this.state.form)
        axios.post(url, this.state.form)
            .then(response => {
                if (response.status === 200) {
                    console.log(response)
                    window.location.reload(true);
                } else {
                    console.log(response)
                    this.setState({
                        error: true,
                        errorMsg: "Esta licencia ya existe"
                    })
                }
            }).catch(error => {
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
    }
    clickLicencia(id) {
        this.setState({
            licenciaSeleccionada: id
        })
    }

    clickEliminarLicencia() {
        let url = Apiurl + "eliminarLicencias/" + this.state.licenciaSeleccionada;
        console.log(url)
        axios.delete(url)
            .then(response => {
                window.location.reload(true);
            });
    }

    clickConfirmarEliminarDeportista() {
        let url = Apiurl + "eliminarPersona/" + this.props.match.params.id;
        axios.delete(url)
            .then(response => {
                this.props.history.push("/deportistas/" + localStorage.getItem('codClub'));
            }).catch(error =>{
                this.setState({
                    error: true,
                    errorMsg: "Error al eliminar"
                })
            })
    }

    render() {
        const form = this.state.form;
        return (
            <React.Fragment>
                <Header></Header>

                <div className="tableContainer">
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
                                        <td> <button data-entry-number="2" className="btn btn-outline-danger " type="button" aria-label="Delete" data-toggle="modal" data-target="#delete-modal-licencia" title="Delete" onClick={() => this.clickLicencia(value.idLicencia)}>
                                            <i className="fa fa-trash" />
                                        </button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="modal fade" id="delete-modal-licencia" tabIndex="-1" role="dialog" aria-labelledby="modalTitle"
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
                                    <button type="button" className="btn btn-danger" id="delete-confirm" onClick={() => this.clickEliminarLicencia()}>Si</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="containerForm">
                        <br />
                        <form className="form-horizontal" onSubmit={this.managerSubmit}>
                            <div className="row">
                                <label className="col-md-2 control-label">Especialidad</label>
                                <select className="form-select" aria-label="Especialidad" name="nombreEspecialidad" onChange={this.managerChange}>
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
                            <br />
                            <button type="submit" className="btn btn-primary" style={{ margin: "10px" }} onClick={this.managerButton}>Activar</button>
                            <button className="btn btn-outline-danger " type="button" onClick={() => this.clickConfirmarEliminarDeportista()}>
                                Eliminar Deportista
                            </button>

                            <a className="btn btn-dark" href={"/deportistas/" + localStorage.getItem('codClub')} style={{ margin: "10px" }}>Salir</a>
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

export default LicenciasDeportista