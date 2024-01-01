import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {


  return (
    <div className={s.item}>
     <ProfileInfo/>
     <MyPosts posts={props.profilePage.posts} addPost={props.addPost} updateAddPost={props.updateAddPost}/>
    </div>
  );
}

export default Profile;
