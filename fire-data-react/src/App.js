import React, { Component } from 'react';
import './App.css';
import MainContainer from './MainContainer';
import Login from "./Login";
import NavComponent from './StrapComponents/NavComponent';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
<style>
@import url('https://fonts.googleapis.com/css?family=Lato');
</style>



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
    console.log(this.state, ' inside of app component')
    return (
    <Container>
      
      <NavComponent />
      {this.state.loggedIn ? <MainContainer username={this.state.username}/> : <Login login={this.login}/>}
       
    </Container>
      
    );
  }
}

export default App;
