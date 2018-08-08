import React, {Component} from "react";

class Login extends Component{
	constructor(){
		super();

		this.state = {
			username:"",
			password:""
		}
	}

handleChange = (e) => {
	this.setState({[e.target.name]: e.target.value})
}

handleSubmit = (e) => {
	e.preventDefault();

	this.props.login(this.state.username);
	//***this is the login method(function) attached to "this.props" that is passed down from the app component
	//invoke the function by passing whatever the user's "username" is to the function
}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
		        <input type='text' name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
		        <input type='password' name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
		        <input type='submit' value="Submit" />
		    </form>

		)
	}
}


export default Login;