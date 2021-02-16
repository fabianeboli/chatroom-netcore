import React, {useState} from 'react';
import fetchService from "../../services/fetchService";
import {useSelector} from "react-redux";

const NewChatRoom = () => {
    const [name, setName] = useState<string>("");
    const loginInfo = useSelector((state: any) => state.login);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const isChatRoomAdded = await fetchService.newChatRoom(name, loginInfo.id, loginInfo.token);
        isChatRoomAdded && window.history.back();
    }

    return (
        <>
            <h1>Create New Chat Room</h1>
            <input type="text" name="name" placeholder="name" value={name}
                   onChange={({target}) => setName(target.value)}/>
            <button type="submit" onClick={handleSubmit}>Add Chatroom</button>
        </>
    )
}

export default NewChatRoom;
