import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  let posts = [
    { id: 1, message: 'hi,how are you?', likesCount: 0 },
    { id: 2, message: 'it is my first post', likesCount: 12 }
  ]
  return (
    <div className={s.item}>
     <ProfileInfo/>
     <MyPosts posts={posts}/>
    </div>
  );
}

export default Profile;
