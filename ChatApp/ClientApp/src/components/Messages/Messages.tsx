import React, {useEffect, useState} from 'react';
import {IMessage} from "../../Interfaces";
import Message from "../Message/Message";
import {useParams} from "react-router";
import fetchService from "../../services/fetchService";

const Messages = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchMessages = async () => {
            id !== undefined && setMessages(await fetchService.getMessages(id));
        }
        fetchMessages();
    }, []);


    return (
        <div>
            {messages.length > 0 && messages.map(({author, date, text}) => (
                <Message author={author} date={date} text={text}/>
            ))}
        </div>
    );
};

export default Messages;
