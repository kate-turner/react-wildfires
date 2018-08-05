import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor () {
    super () 
      this.state= {
        firesData: []
      }
    }
  getFires = async() => {

    try {
      
      const convert = require("xml-js");
      const xml = await fetch('https://www.geomac.gov/DynContent/georss/nifc_large_firesW3C.xml');
      const firesJson = await convert.xml2json(xml, {compact: true, spaces: 4});
      console.log(firesJson);
    } catch(err) {
      console.log(err, 'error in catch block')
      return err
    }
  }
  componentDidMount(){
    this.getFires().then((data) =>
      this.setState({
        firesData: data
      }))

  }
  render() {
    return (
      <div className="App">
        <div className="mapContainer">
        </div>

        <div className="fireContainer">
        </div>
       
      </div>
    );
  }
}

export default App;
