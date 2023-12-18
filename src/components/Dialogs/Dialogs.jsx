import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Dimich' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' }
    ]
    let message = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Do you think visualization can change thinking?' },
        { id: 3, message: 'Yo yo' },
        { id: 4, message: 'Yo bro' },
        { id: 5, message: 'Yo' },
        ]

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
let messagesElements = message.map(m => <Message message={m.message} id={m.id}/>)      

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              {dialogsElements}
               
            </div>

            <div className={s.messages}>
                {messagesElements}
               
            </div>
        </div>
    )
}

export default Dialogs;
