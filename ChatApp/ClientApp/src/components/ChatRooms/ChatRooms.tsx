import React, {useEffect, useState} from 'react';
import {IChatRoom} from "../../Interfaces";
import ChatRoom from "./ChatRoom/ChatRoom";
import fetchService from "../../services/fetchService";

const ChatRooms = () => {
    const [chatrooms, setChatrooms] = useState<IChatRoom[]>([]);

    useEffect(() => {
        const fetch = async () => {
            setChatrooms(await fetchService.getChats());
        }
        fetch();
    }, []);


    return (
        <div>
            <h1>ChatRooms</h1>
            {chatrooms.map(({name, id}) => (
                <>
                    <ChatRoom name={name} id={id}/>
                </>
            ))}
        </div>
    );
};

export default ChatRooms;
