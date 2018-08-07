import React from 'react';


const Posts = (props) => {
  const postsList = posts.map((post, i ) => {
    return (
      <li key={posts._id}>
        <span>{posts.title}</span><br/>
        <textarea>{posts.body}</textarea>
        <button onClick={deletePosts.bind(null, posts._id)}>Delete</button>
        <button onClick={editPosts.bind(null, posts._id)}>Edit</button>
    </li>)
  })

  return (
    <ul>
      {postsList}
    </ul>
    )

};
//using .bind in order to pass the posts._id when the onClick listener is triggered

export default Posts;