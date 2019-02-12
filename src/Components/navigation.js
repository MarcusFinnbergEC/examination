import React, { Component } from "react";
import { NavLink , Redirect } from "react-router-dom";
import Facebook from "../Images/flogo-RGB-HEX-Blk-72.svg";
import Logo from "../Images/vgk-logo.png";
import { connect } from 'react-redux';
import { loginAction } from '../Redux/Actions/userActions';

class Navigation extends Component {
    /*console.log('navloc', window.location.pathname)
    if(window.location.pathname.includes('/login')) {
        return (<div></div>)
    }*/
logout(){
        this.props.dispatch(loginAction({signedIn: false}));
}

    render(){
        console.log("nav:", this.state);
        if(this.props.user.signedIn === false) {
            console.log("NOT SIGNED IN!!!");
            return <Redirect to="/" />
        }
    return (
        <div id="navbar-container">
        <div className="navbar-left">
            <div className="nav-logo">
                <NavLink className="nav-link" to="/"><img src={Logo} alt="team-logo"/></NavLink>
            </div>
            <div className="nav-links">
                <NavLink className="nav-link" to="/home">Start</NavLink>
                <NavLink className="nav-link" to="/events">Kalender</NavLink>
                <NavLink className="nav-link" to="/roster">Laget</NavLink>
                <NavLink className="nav-link" to="/equipment">Utrustning</NavLink>
                <NavLink className="nav-link" to="/contact">kontakt</NavLink>
                <NavLink className="nav-link" to="/news">Nyheter</NavLink>
            </div>
        </div>
        <div className="navbar-right">
            <div className="nav-social-media">
                <a href="https://www.facebook.com/groups/480651448622610/" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="facebook-link"/></a>
            </div>
            <div className="nav-logout">
                <button className="logout-button" onClick={() => this.logout()}>Logga ut</button>
            </div>
        </div>
        </div>
    )
}
}

const mapStateToProps = state => ({
    user: state.userReducer
  })
  
  export default connect(mapStateToProps)(Navigation);