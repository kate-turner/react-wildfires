import React, { Component } from 'react';
import './App.css';
import MainContainer from './MainContainer';
import NavComponent from './StrapComponents/NavComponent';
// import { Route, Switch } from 'react-router-dom';


// const My404 = () => {
//   return (
//     <div>
//       You're Lost
//     </div>
//     )
// };

// const AppRoutes = () => {
//   return (
//     <main>
//       <Switch>
        
//         <Route exact path="/" component={ MainContainer } />
//         <Route component={My404} />
//       </Switch>
//     </main>
//     )
// };



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
