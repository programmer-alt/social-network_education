import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return (
   
    
     
        <div className={s.item}><img src="https://avatars.dzeninfra.ru/get-zen_doc/2442582/pub_5f4aca98f464170bc2acbf7c_5f4acedcef735e13d308639a/scale_1200" alt="аватарка" /> 
        {props.message}
        <div>
          <span>like</span> {props.likesCount}
        </div>
        </div>
       
   
  );
}

export default Post;
