import React, { Component } from 'react';
import './App.css';
import MainContainer from './MainContainer';
import NavComponent from './StrapComponents/NavComponent';


class App extends Component {
  render() {
    return (
      <div className="container">
        <NavComponent />
        <MainContainer/>
      </div>
    );
  }
}

export default App;
