import React from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = () => {
 
  let postData = [
    { id: 1, message: 'hi,how are you?', likesCount: 0 },
    { id: 2, message: 'it is my first post', likesCount: 12 }
]
 
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
       <Post message={postData[0].message} id={postData[0].id} likesCount={postData[0].likesCount}/>
       <Post message={postData[1].message} id={postData[1].id} likesCount={postData[1].likesCount}/>
      </div>
    </div>
  );
}

export default MyPosts;
