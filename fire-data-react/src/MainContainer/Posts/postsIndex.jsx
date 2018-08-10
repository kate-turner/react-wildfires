import React from 'react';


const Posts = (props) => {
  console.log(props, 'this is props in post index');
  const postsList = props.posts.map((post, i) => {
    return (
      <li key={post._id}>
        <span>{post.title}</span><br/>
        <textarea>{post.body}</textarea>
        <button onClick={props.deletePosts.bind(null, post._id)}>Delete</button>
        <button onClick={props.showModal.bind(null, post._id)}>Edit</button>
    </li>
    )
  });

  return (
    <div>
      <span>
        <ul>
          {postsList}
        </ul>
      </span>
    </div>

    )

};

export default Posts;
