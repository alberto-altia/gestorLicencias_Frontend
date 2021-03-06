import React from 'react';
//css
import '../assets/css/Login.css';

import logo from '../assets/img/small.png';
//servicio
import { Apiurl } from '../service/apirest';
//librerias
import axios from 'axios';


class Login extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        form: {
            "usuario": "",
            "password": ""
        },
        error: false,
        errorMsg: ""
    }

    managerSubmit = e => {
        e.preventDefault();
    }

    managerChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    managerButton = () => {
        let url = Apiurl + "login";
        axios.post(url, this.state.form)
            .then(response => {
                if(response.status === 200){
                    console.log("200 response");
                    console.log(response);
                    localStorage.clear();
                    localStorage.setItem("jwt",response.data.jwt);
                    console.log(localStorage.getItem('jwt'))
                    this.props.history.push("/escritorio");
                }else{
                    this.setState({
                        error: true,
                        errorMsg: "error usuario"
                    })
                }
            }).catch(error =>{
                this.setState({
                    error: true,
                    errorMsg: "Error para validar usuario"
                })
            })
        
    }

    render() {
        return (
            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src={logo} id="icon" width="100px" alt="User Icon" />
                        </div>

                        <form onSubmit={this.managerSubmit}>
                            <input type="text" className="fadeIn second" name="usuario" placeholder="usuario" onChange={this.managerChange} />
                            <input type="password" className="fadeIn third" name="password" placeholder="password" onChange={this.managerChange} />
                            <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.managerButton} />
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

export default Login