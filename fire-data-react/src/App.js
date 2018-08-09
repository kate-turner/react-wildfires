import React, { Component } from 'react';
import './App.css';
import MainContainer from './MainContainer';
import NavComponent from './StrapComponents/NavComponent';
import './App.css';

class App extends Component {
  render() {
    return (
   
      
      <div className="container-fluid">
      <div>
      <NavComponent />
      </div>

       <div className="row">
        <MainContainer/>
       </div>
      </div>
  
    );
  }
}

export default App;
