import React, { Component } from 'react';
import Logo from "../Images/vgk-logo.png";
import { loginAction } from "../Redux/Actions/userActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";



class Login extends Component {
    userInfo = {
        email: "",
        password: ""
    }
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
        console.log("login");
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

const mapStateToProps = state => ({
    user: state.userReducer
})

export default connect(mapStateToProps)(Login);