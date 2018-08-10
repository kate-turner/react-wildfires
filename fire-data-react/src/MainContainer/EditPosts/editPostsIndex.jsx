import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const EditPosts = (props) =>  {

  return (
    <div>
      <h4> Edit Post</h4>
      <Form onSubmit={props.closeAndEdit}>
        <FormGroup>
          <Label for="title">Edit Title</Label>
          <Input type="text" name="title" id="title" onChange={props.handleFormChange} defaultValue={props.postToEdit.title} />
        </FormGroup>
        
        <FormGroup>
          <Label for="body">Edit Content</Label>
          <Input type="textarea" name="body" id="body" onChange={props.handleFormChange} defaultValue={props.postToEdit.body} />
        </FormGroup>
          
        <Button type="Submit"/>
      </Form>
    </div>

    )
  }

export default EditPosts;




      
        