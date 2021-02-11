import React, {useState} from 'react';
import {useSelector} from "react-redux";
import fetchService from "../../services/fetchService";
import {useParams} from "react-router";

const EditChatRoom = () => {
    const [name, setName] = useState<string>("");
    const loginInfo = useSelector((state: any) => state.login);
    const {id} = useParams()

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const isChatRoomEdited = await fetchService.editChatRoom(id!, name, loginInfo.id);

        console.log(isChatRoomEdited);

    }

    return (
        <>
            <h1>Edit Chat Room</h1>
            <input type="text" name="name" placeholder="name" value={name}
                   onChange={({target}) => setName(target.value)}/>
            <button type="submit" onClick={handleSubmit}>Edit Chatroom</button>
        </>
    )
};

export default EditChatRoom;
