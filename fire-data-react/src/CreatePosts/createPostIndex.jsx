import React, { Component } from 'react';


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
  <div>
    <h1> this is the new posts page </h1>
    <form onSubmit={this.props.addPost.bind(this, this.state)}>
      <label>
        <p> Post:</p>
        <input type="text" name="title" onChange={this.handleChange}/>
      </label>
      <label>
        <p> Create Content: </p>
        <textarea name="body" onChange={this.handleChange}/>
      </label>
      <input type='Submit' value="Publish Post"/>
    </form>
  </div>

    )
  }
}

export default CreatePosts;
