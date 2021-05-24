import React from 'react';
import Header from '../template/Header';

import {Apiurl} from '../service/apirest';
import axios from 'axios';


class Escritorio extends React.Component{

    state={
        personas:[]
    }

    clickPersona(id){
        this.props.history.push("/editar/" + id);
    }

    componentDidMount(){
       let url = Apiurl + "personas";
       axios.get(url)
       .then(response => {
           this.setState({
               personas : response.data
           })
       })
    }

    render(){
        return(
            <React.Fragment>
                <Header></Header>
                <br/><br/><br/>
                <div className="container">
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
                </div>
            </React.Fragment>
        );
    }
}

export default Escritorio;