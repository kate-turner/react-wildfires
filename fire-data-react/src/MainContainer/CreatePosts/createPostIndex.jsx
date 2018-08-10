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
   
    <form onSubmit={this.props.addPost.bind(this, this.state)}>
      <span>
        <p> Post:</p>
        <input type="text" name="title" onChange={this.handleChange} />
      </span>
      <span>
        <p> Create Content: </p>
        <textarea type="text" name="body" onChange={this.handleChange} />
      </span>  
      <input type='Submit' defaultValue="Publish Post"/>
    </form>
  </div>

    )
  }
}

export default CreatePosts;
