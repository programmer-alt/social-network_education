import React from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map (p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
let addPost = () => {
  let text = addPostElement.current.value;
  addPostElement.current.value= '';
  props.addPost(text)
}
let addPostElement = React.createRef()
let onPostChange = () => {
  let text = addPostElement.current.value;
  props.updateNewPost(text)
}
  return (
    <div>
      <div className={s.postsBlock}> <h3>My posts</h3> </div>
      <div>
        <div>
        <textarea ref={addPostElement} onChange={onPostChange} value={props.newPostText}/>
        </div>
        <button onClick={addPost}>Add Post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
       {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
