import React, {useState} from 'react';
import fetchService from "../../services/fetchService";
import {useParams} from "react-router";
import {INewMessage} from "../../Interfaces";
import {useSelector} from "react-redux";

const NewMessage = () => {
    const [newMessage, setNewMessage] = useState<string>("");
    const {id} = useParams();
    const loginInfo = useSelector((state: any) => state.login);
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const message: INewMessage = {
            author: loginInfo.name,
            text: newMessage,
            userId: loginInfo.id
        }

        id && fetchService.newMessage(id, message, loginInfo.token);

        setNewMessage("");
    }

    return (
        <div>
            <input type="text"
                   value={newMessage}
                   onChange={({target}) => setNewMessage(target.value)}/>

            <button type="submit" disabled={newMessage.length == 0} onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default NewMessage;
