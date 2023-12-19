import React from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = (props) => {
 

 let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)
  return (
    <div>
      <div className={s.postsBlock}> <h3>My posts</h3> </div>
      <div>
        <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
       {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
