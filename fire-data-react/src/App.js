import React, { Component } from 'react';
import FireList from './FireList';
import MapsData from './MapsData';
import Login from './Login';
import MainContainer from './MainContainer';
import NavComponent from './StrapComponents/NavComponent';



class App extends Component {
  constructor () {
    super () 
      this.state= {
        firesData: [],
        logInValid: false, //when logged is false we want to show the login in container, when it is true we want to see our main container
        username:""
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

    //this is the LOGIN FUNCTION--> it's giving login/index.js ACCESS to APP.js
  login = (username) => { 
    console.log('login function in app is working', username);

    //passing this function down to login
    //we will setState of this component, but we will call it in the login component
    this.setState({
      username: username,
      logInValid: true
    });
        console.log("login function in app is working", username);
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
    console.log(this.state, " inside of app component");
    const logInValid = this.state.logInValid; 
    
    return (
     <div className="container">
      <NavComponent />
        
        <div className="login">
          {this.state.logInValid ? <MainContainer username={this.state.username}/> : <Login login={this.login}/>}
         </div>
        
        <div className="row">
        <div className="col-md-6 qCont">
        <div className="mapContainer">
        <MapsData firesData={this.state.firesData} />
        </div>
        </div>
        
        
        <div className="col-md-6 qCont">
          <div className="fireContainer">
            <FireList firesData={this.state.firesData} />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
