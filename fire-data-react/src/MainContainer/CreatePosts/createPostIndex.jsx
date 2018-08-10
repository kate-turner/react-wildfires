import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class CreatePosts extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      body: ''
    }
  }
  handleChange = (e) => {

    this.setState({[e.currentTarget.name]: e.currentTarget.value});

  }

  render(){
    console.log(this.props, ' this is props in createPostIndex')
  return (
  
<div className="posts2">
    <Form className="posts2" onSubmit={this.props.addPost.bind(this, this.state)}>
      <FormGroup className="createPost">
        <Label for="titleTextHeader">Title</Label>
        <input type="text" name="title" onChange={this.handleChange}/>
        <Label for="contentTextHeader">Create content</Label>
        <input type="textarea" name="body" onChange={this.handleChange}/>
        <br></br>
        <br></br>
        <Button type='Submit'>Create New Post</Button>
      </FormGroup>
    </Form>
    </div>

    )
  }
}

export default CreatePosts;
