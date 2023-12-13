import React from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>My posts</div>
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
       <Post message='hi,how are you?' likesCount='0'/>
       <Post message='it is my first post' likesCount='23'/>
      </div>
    </div>
  );
}

export default MyPosts;
