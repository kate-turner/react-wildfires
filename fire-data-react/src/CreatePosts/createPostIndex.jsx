import React, { Component } from 'react';


class CreatePosts extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      body: ''
    }
  }
  updatePosts = (e) => {

    this.setState({[e.currentTarget.name]: e.currentTarget.value});

  }

  render(){
    console.log(this.props, ' this is props')
  return (
    <h1> this is the new posts page </h1>
    <form onSubmit={this.props.addPosts.bind(this, this.state)}>
      <label>
        Post:
        <input type="text" name="title" onChange={this.updatePosts}/>
      </label>
      <label>
        Create Content:
        <textarea name="body" onChange={this.updatePosts}/>
      </label>
      <input type='Submit' value="Publish Post"/>
    </form>

    )
  }
}

export default CreatePosts;