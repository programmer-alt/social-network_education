import React from "react";
import s from './FriendsSidebar.module.css'

const Friends = (props) => {
    const threeFriends = props.state.sidebarData.map((friend) => {
        return <div key={friend.id}>{friend.name} </div>
    })
    return (
        <div >
          <div className={s.item}>  {threeFriends} </div>
        </div>
    )
}

export default Friends