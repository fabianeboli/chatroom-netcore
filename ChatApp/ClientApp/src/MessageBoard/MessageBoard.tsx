import React from 'react';
import Messages from "../components/Messages/Messages";
import NewMessage from "../components/NewMessage/NewMessage";

const MessageBoard = () => {
    return (
        <div>
           <Messages />
           <NewMessage/>
        </div>
    );
};

export default MessageBoard;
