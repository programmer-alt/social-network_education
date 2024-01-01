import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { updateNewPost } from "../../redux/state";

const Profile = (props) => {


  return (
    <div className={s.item}>
      <ProfileInfo />
      <MyPosts 
      posts={props.profilePage.posts}
      addPost={props.addPost}
      newPostText={props.profilePage.newPostText} 
      updateNewPost={props.updateNewPost}/>
    </div>
  );
}

export default Profile;
