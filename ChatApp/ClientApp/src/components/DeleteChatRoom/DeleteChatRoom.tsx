import React, {useState} from 'react';
import {useSelector} from "react-redux";
import fetchService from "../../services/fetchService";
import {Redirect, useParams} from "react-router";

const DeleteChatRoom = () => {
    const [name, setName] = useState<string>("");
    const loginInfo = useSelector((state:any)=> state.login);
    const {id} = useParams();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const isChatRoomDeleted = await fetchService.deleteChatRoom(id!, loginInfo.id);
        console.log(isChatRoomDeleted);
        isChatRoomDeleted && window.history.back(); 
    }

    return (
        <>
            <h1>Delete Chat Room {id}?</h1>
            <button type="submit" onClick={handleSubmit}>Delete Chatroom</button>
        </>
    )
};

export default DeleteChatRoom;
