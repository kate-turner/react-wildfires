import React, { Component } from 'react';
import FireList from './FireList';
import MapsData from './MapsData';



class App extends Component {
  constructor () {
    super () 
      this.state= {
        firesData: []
      }
    }
  
  getFires = async() => {
    const fireAPI = 'http://api.aerisapi.com/fires/closest?p=denver,co&filter=critical&radius=600miles&from=+2hours&limit=50&&client_id=u42Dr3u5idKSLZQgXmBgx&client_secret=Ir3uVmVdUSDwMRHYVZIcalMRNwFIM1CdsVm3Rcis';
    try {
      const fires = await fetch(fireAPI);
      const firesJson = await fires.json();
      return firesJson;
    } catch(err) {
      console.log(err, 'error in catch block')
      return err
    }
  }
  
  componentDidMount(){
    this.getFires().then((data) => {
      console.log(data, 'this is data')
      this.setState({
        firesData: data.response
      })
    }).catch((err) => {
      console.log(err)
    });
  }
  render() {
    return (
      <div className="App">
        <div className="mapContainer">
        <MapsData firesData={this.state.firesData} />

        </div>

        <div className="fireContainer">
        <FireList firesData={this.state.firesData} />
        </div>
       
      </div>
    );
  }
}

export default App;
