import React from 'react';


const Posts = (props) => {
  console.log(props, 'this is props in post index');
  const postsList = props.posts.map((post, i) => {
    return (
      <li key={post._id}>
        <span className="post-span">{post.title}</span><br/>
        <p className="post-body">{post.body}</p>
        <button onClick={props.deletePosts.bind(null, post._id)}>Delete</button>
        <button onClick={props.showModal.bind(null, post._id)}>Edit</button><br/><br/>
    </li>
    )
  });

  return (

 

      <div class="panel panel-primary" id="post_panel">
        <div class="panel-heading">
          <h3 class="panel-title">Posts</h3>
        </div>
    
      <div class="panel-body">
          <ul class="list-group">
              <li class="list-group-item">
              {postsList}</li>
            </ul>
        </div>
        </div>

    )

};

export default Posts;
