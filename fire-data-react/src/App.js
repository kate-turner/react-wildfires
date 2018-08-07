import React, { Component } from 'react';
import './App.css';
import PostsContainer from './PostsContainer';
import Login from './Login'
import {Route, Switch} from 'react-router-dom';

const My404 = () => {
  return (
    <div>
      Something Has Gone Very, Very Wrong
      </div>
  )
}


//switch allows you to switch btw routes
//route component is rendering a component
const App = () => {
  return(
    <main>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/posts" component={MainContainer}/>
        <Route component={My404}/>
      </Switch>
    </main>
  )
}
//exact path is referring to an exact url
//handling the routing on the react app
//<Route exact path="/" component={Login}/> sends props to Login component--one of which is history--history of where we were in the browser

export default App;
