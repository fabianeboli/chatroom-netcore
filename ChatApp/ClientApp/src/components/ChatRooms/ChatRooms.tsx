import React, {useEffect, useState} from 'react';
import {IChatRoom} from "../../Interfaces";
import ChatRoom from "./ChatRoom/ChatRoom";
import fetchService from "../../services/fetchService";

const ChatRooms = () => {
    const [chatRooms, setChatRooms] = useState<IChatRoom[]>([]);

    useEffect(() => {
        const fetch = async () => {
            setChatRooms(await fetchService.getChats());
        }
        fetch();
    }, []);


    return (
        <div>
            <h1>ChatRooms</h1>
            {chatRooms.map(({name, id, userId}) => (
                <>
                    <ChatRoom name={name} id={id} userId={userId}/>
                </>
            ))}
        </div>
    );
};

export default ChatRooms;
