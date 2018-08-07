import React, { Component } from 'react';


const EditPosts = (props) =>  {

  return (
    <div>
      <h4> Edit Post</h4>
      <form onSubmit={props.closeAndEdit}>
        <label>
          Edit Post Title:
          <input type="text" name="title" onChange={props.handleFormChange} value={props.postsToEdit.title}/>
        </label>
        <label>
          Edit Content:
          <textarea type="text" name="body" onChange={props.handleFormChange} value={props.postsToEdit.body}/>
        </label>
        <input type='Submit'/>
      </form>
    </div>

    )
  }

export default EditPosts;

