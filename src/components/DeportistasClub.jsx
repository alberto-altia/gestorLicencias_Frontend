import React from 'react';
import Header from '../template/Header';
import {Apiurl} from '../service/apirest';
import axios from 'axios';
import '../assets/css/DeportistaClub.css';

class DeportistasClub extends React.Component{

    state={
        personas:[]
    }

    clickPersona(id){
        this.props.history.push("editar/" + id);
    }

    componentDidMount(){        
        let codClub = this.props.match.params.id;
        let url = Apiurl + "deportistas/" + codClub;
        console.log(url)
        axios.get(url)
        .then(response => {
            console.log(response)
            this.setState({
                personas : response.data
            })
        });
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
                                    <tr key={index}>
                                        <td>{value.nombreApellidos}</td>
                                        <td>{value.dni}</td>
                                        <td>{value.numLicenciaDeportista}</td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
                </div>
                
            </React.Fragment>
        );
    }
}

export default DeportistasClub;