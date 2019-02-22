import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Home from "./Components/home";
import Login from "./Components/login";
import Events from "./Components/events";
import Roster from "./Components/roster";
import News from "./Components/news";
import Equipment from "./Components/equipment";
import Contact from "./Components/contact";
import ErrorPage from "./Components/errorpage";
import Navigation from "./Components/navigation";

const directus = 'http://localhost/admin'

class App extends Component {
  render() {
    if(!this.props.user.signedIn) {
      return <Login />
    }
    return (
      <BrowserRouter>
      <div className="app-wrapper">
        {this.props.user.signedIn ? <Navigation /> : ''}
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/" component={Login} exact/>
          <Route path="/events" component={Events}/>
          <Route path="/roster" component={Roster}/>
          <Route path="/news" component={News}/>
          <Route path="/equipment" component={Equipment}/>
          <Route path="/contact" component={Contact}/>
          <Route component={ErrorPage} />
        </Switch>
        </div>
      </BrowserRouter> 
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer
})

export default connect(mapStateToProps)(App);
