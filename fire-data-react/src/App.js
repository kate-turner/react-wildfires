import React, { Component } from 'react';
import './App.css';
import Login from "./Login";
import MainContainer from './MainContainer';
import NavComponent from './StrapComponents/NavComponent';


class App extends Component {
  constructor(){
    super();

  this.state = {
    loggedIn: false,
    username:  ""
    }
  } 
  login = (username) => {
    console.log('login function in app is working', username);
  
    this.setState({
      username: username,
      loggedIn: true
    });
  }

  render() {
    return (
      <div className="container">
      <NavComponent />
      {this.state.loggedIn ? <MainContainer username={this.state.username}/> : <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;
