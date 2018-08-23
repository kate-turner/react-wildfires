import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const EditPosts = (props) =>  {

  return (
    <div className="edit-posts">
      <Form className="edit-posts"onSubmit={props.closeAndEdit}>
        <FormGroup>
          <Label for="title">Edit Title</Label>
          <Input type="text" name="title" id="title" onChange={props.handleFormChange} defaultValue={props.postToEdit.title} />
          <Label for="body">Edit Content</Label>
          <Input type="textarea" name="body" id="body" onChange={props.handleFormChange} defaultValue={props.postToEdit.body} />
          <br></br>
          <br></br>
          <Button type="Submit"> Edit Post </Button>
        </FormGroup>
      </Form>
    </div>

    )
  



  }

export default EditPosts;




      
        