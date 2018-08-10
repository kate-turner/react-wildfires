import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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

    this.props.login(this.state.username);
    //we are calling the login function that we created in App.js, and we sent down as props in order to lift our "state"
    // const loginResponse = await fetch('http://localhost:9000/auth/login', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state),
    //   headers:{
    //     'Content-Type': 'application/json'
    //     }
    // });

    // const parsedResponse = await loginResponse.json();
    // console.log(parsedResponse, " ***this is response from our express api")
    // //model is talking to the 
    
    // if(parsedResponse.data === 'login successful'){ 
    //   //'login successful' message comes from authController

    //   this.props.history.push('/posts');
      //react's version of redirect
//     }
 }

    render(){
        return (
            <Form inline onSubmit={this.handleSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="username" className="mr-sm-2"></Label>
                <Input type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="Password" className="mr-sm-2"></Label>
                <Input type="password" name="password" id="Password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
            </FormGroup>
            <Button>Submit</Button>
            </Form>
        );
        }    
};

export default Login;
