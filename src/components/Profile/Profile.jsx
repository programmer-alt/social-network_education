import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1476889932_zakat-derevo.jpg" alt="дерево на закате" />
      </div>
      <div>ava+description</div>
     <MyPosts />
    </div>
  );
}

export default Profile;
