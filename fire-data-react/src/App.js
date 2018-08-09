import React, { Component } from 'react';
import './App.css';
import MainContainer from './MainContainer';
import NavComponent from './StrapComponents/NavComponent';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
   
      
      
    <Container>
      <NavComponent />
        <MainContainer/>
    </Container>
      
  
    );
  }
}

export default App;
