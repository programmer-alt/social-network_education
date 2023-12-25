import React from "react";
import s from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    const [imgSrc, imgSrcTwo] = ["https://cdn-icons-png.flaticon.com/128/7005/7005152.png", "https://img.freepik.com/free-vector/hand-drawn-black-music-logo-template_23-2150968998.jpg?size=626&ext=jpg&ga=GA1.1.369286752.1703489576&semt=sph"];

    let path = "/dialogs/" + props.id;
    let avatar = props.id > 3 ? imgSrc : imgSrcTwo
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src={avatar} alt="Avatar" className={s.avatar} />
            <NavLink to={path}> {props.name}</NavLink>
            
        </div>
    )
}




export default DialogItem;
