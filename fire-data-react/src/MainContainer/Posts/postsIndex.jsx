import React from 'react';


const Posts = (props) => {
  console.log(props);
  const postsList = props.posts.map((post, i) => {
    return (
      <li key={index}>
        <span>{post.title}</span><br/>
        <textarea>{post.body}</textarea>
        <button onClick={props.deletePosts.bind(null, post._id)}>Delete</button>
    </li>)
  })

  return (
    <div>
      <h1>This is posts page!</h1>
    <ul>
      {postsList}
    </ul>
    </div>
    )

};

export default Posts;

