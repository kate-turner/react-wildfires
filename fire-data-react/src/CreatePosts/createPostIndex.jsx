import React, { Component } from 'react';


class CreatePosts extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      body: ''
    }
  }
  addPosts = (e) => {

    this.setState({[e.currentTarget.name]: e.currentTarget.value});

  }

  render(){
    console.log(this.props, ' this is props in createPostIndex')
  return (
  <div>
    <h1> this is the new posts page </h1>
    <form onSubmit={this.addPosts.bind(this, this.state)}>
      <label>
        Post:
        <input type="text" name="title" onChange={this.addPosts}/>
      </label>
      <label>
        Create Content:
        <textarea name="body" onChange={this.addPosts}/>
      </label>
      <input type='Submit' value="Publish Post"/>
    </form>
  </div>

    )
  }
}

export default CreatePosts;