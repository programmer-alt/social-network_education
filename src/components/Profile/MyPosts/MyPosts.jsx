import React from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map (p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
  let addPost = ()=> {
    let text = newPostElement.current.value
    alert(text)
  }
  let newPostElement = React.createRef()
  return (
    <div>
      <div className={s.postsBlock}> <h3>My posts</h3> </div>
      <div>
        <div>
        <textarea name="" id="" cols="30" rows="10" ref={newPostElement}></textarea>
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
