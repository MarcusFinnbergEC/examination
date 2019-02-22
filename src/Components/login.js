import React, { Component } from 'react';
import Logo from "../Images/vgk-logo.png";
import { loginAction } from "../Redux/Actions/userActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import DirectusSDK from "@directus/sdk-js";

/*const client = new DirectusSDK();

console.log("CLIENT: ", client)
client.login({
    url: "http://localhost",
    project: "_",
    email: "marcus.finnberg@outlook.com",
    password: "B4nanL4x112!",
    storage: window.localStorage
  });
console.log("login");
console.log("localStorage: ", localStorage);
*/
/*const API = "http://localhost/_"
const DEFAULT_QUERY = "/items/users";*/

class Login extends Component {
    userInfo = {
        email: "",
        password: ""
    }
    
    /*componentDidMount() {
        fetch(API + DEFAULT_QUERY)
          .then(response => response.json())
          .then(data => console.log(data));
      }*/
    userLogin(e){
        console.log("props:",this.props);
        e.preventDefault();
        this.props.dispatch(loginAction(this.userInfo))
    }
    handleInput(){
            this.userInfo = {
                email: this.refs.email.value,
                password: this.refs.password.value
            }      
    }

    redirect () {
        console.log("redirect körs");
        if(this.props.user.signedIn === true){
            console.log("YES!")
        return <Redirect to="/home"/>
    }
    }
    render() {
        return (
            <div className="main-container-fixed">
            {!this.props.user.signedIn ? '' : this.redirect()}
                <div className="main-inner-left-container-fixed-login-component">
                    <div className="image-filter">
                        
                    </div>
                </div>
                <div className="main-inner-right-container-fixed">
                    <div className="main-inner-right-inner-container">
                        <img src={Logo} alt="team-logo" />
                        <form>
                            <input onChange={() => this.handleInput()} className="login-input" autoComplete="username" type="email" ref="email" placeholder="E-post"></input>
                            <input onChange={() => this.handleInput()} className="login-input" autoComplete="current-password" type="password" ref="password" placeholder="Lösenord"></input>
                            <button className="login-button" onClick={(e) => this.userLogin(e)}>Logga in</button>
                        </form>
                    </div>
                </div>            
            </div>
        )
    } 
}

const mapStateToProps = state => ( console.log("UserReducer: ", state),{
    user: state.userReducer
})

export default connect(mapStateToProps)(Login);