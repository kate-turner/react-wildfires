import React, { Component } from 'react';
import './App.css';
import MainContainer from './MainContainer';
import NavComponent from './StrapComponents/NavComponent';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
<style>
@import url('https://fonts.googleapis.com/css?family=Lato');
</style>

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
