import React, { Component } from 'react';
import './App.css';
import MainContainer from './MainContainer';
import Login from "./Login";
import NavComponent from './StrapComponents/NavComponent';
import './App.css';
import {Route, Switch} from 'react-router-dom';

const My404 = () => {
  return (
    <div>
      You're Lost Buddy
      </div>
  )
}

class App extends Component {
  constructor(){
    super();

  this.state = {
    loggedIn: false,
    username:  ""
    }//closing this.state object
  } //closing constructor

  //**create login method (function) that will hold "setState" object -->in index.js the handle Change method holds "setState" object
login = (username) => {
  console.log('login function in app is working', username);

  this.setState({
    username: username,
    loggedIn: true
  });
}

    
  render() {
    console.log(this.state, ' inside of app component')
    return (
      <div className="container-fluid">
        
      <div>
      <NavComponent />
      </div>

       <div className="row">
       {this.state.loggedIn ? <MainContainer username={this.state.username}/> : <Login login={this.login}/>}
       </div>
      </div>
  
    );
  }
}

export default App;
