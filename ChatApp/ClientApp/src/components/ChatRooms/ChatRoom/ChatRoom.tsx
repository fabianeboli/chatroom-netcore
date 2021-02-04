import React from 'react';
import {IChatRoom} from "../../../Interfaces";


const ChatRoom = ({name, id}: IChatRoom) => {
    return (
        <div>
         <h4>{name}</h4>   
         <button>Go to chatroom {id}</button>   
        </div>
    );
};

export default ChatRoom;
