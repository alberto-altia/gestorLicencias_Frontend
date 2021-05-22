import React from 'react';
//css
import '../assets/css/Login.css'

class Login extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                        <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                        </div>

                        <form>
                        <input type="text" id="login" class="fadeIn second" className="login" placeholder="login"/>
                        <input type="text" id="password" class="fadeIn third" className="login" placeholder="password"/>
                        <input type="submit" className="fadeIn fourth" value="Log In"/>
                        </form>

                        <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login