import React from 'react';
import Header from '../template/Header';
import {Apiurl} from '../service/apirest';
import axios from 'axios';
import '../assets/css/DeportistaClub.css';

class DeportistasClub extends React.Component{

    state={
        personas:[],
        licenciaSeleccionada: null
    }

    clickPersona(id){
        this.props.history.push("editar/" + id);
    }

    clickDeportista(){
        this.props.history.push("/nuevoDeportista");
    }

    componentDidMount(){        
        let codClub = this.props.match.params.id;
        let url = Apiurl + "deportistas/" + codClub;
        axios.get(url)
        .then(response => {
            let id = JSON.parse(atob(localStorage.getItem('jwt').split('.')[1])).userId;
            this.setState({
                personas : response.data.filter(persona => persona.idPersona != id)
            })
        });
    }
    
    clickDeportista(id) {
        this.props.history.push("/licenciaDeportistas/" + id)
    }
    clickNuevoDeportista() {
        this.props.history.push("/nuevoDeportista")
    }
    render(){
        return(
            <React.Fragment>
                <Header></Header>
                <div className="estiloTabla">
                    <div className="titulo">
                        <h3>Deportistas Afiliados</h3>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Nombre y Apellidos</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Número Licencia Deportista</th>
                           
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.personas.map((value,index)=>{
                                return(
                                    <tr key={index} onClick={() => this.clickDeportista(value.idPersona)}>
                                        <td>{value.nombreApellidos}</td>
                                        <td>{value.dni}</td>
                                        <td>{value.numLicenciaDeportista}</td>
                                        
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-primary" onClick={() => this.clickNuevoDeportista()}>Añadir Deportista</button>
                    
                </div>
                
            </React.Fragment>
        );
    }
}

export default DeportistasClub;