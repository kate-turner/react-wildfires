import React, {Component} from "react";

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

handleChange = (e) => { 
    this.setState({[e.target.name]: e.target.value});
}

handleSubmit = (e) => {
    e.preventDefault()
    //we are calling the login function that we created in App.js, and we sent down as props in order to lift our "state"
    const loginResponse = await fetch('http://localhost:9000/auth/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
        }
    });

    const parsedResponse = await loginResponse.json();
    console.log(parsedResponse, " ***this is response from our express api")
    //model is talking to the 
    
    if(parsedResponse.data === 'login successful'){ 
      //'login successful' message comes from authController

      this.props.history.push('/posts');
      //react's version of redirect
    }
}

    render(){
        //console.log(this.state, " this is state")
        return(

            <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
            <input type="password" name="password"  placeholder="password"  value={this.state.password} onChange={this.handleChange}/>
            <input type="submit" value="Submit"/>
            </form>
            )
    }
};




export default Login;