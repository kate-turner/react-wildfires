import React from 'react';


const Posts = (props) => {
  console.log(props);
  const postsList = props.posts.map((post, i ) => {
    return (
      <li key={post._id}>
        <span>{post.title}</span><br/>
        <textarea>{post.body}</textarea>
    </li>)
  })

  return (
    <div>
    <h1> This is our Posts page! </h1>
    <ul>
      {postsList}
    </ul>
    </div>
    )

};
//using .bind in order to pass the posts._id when the onClick listener is triggered

export default Posts;

