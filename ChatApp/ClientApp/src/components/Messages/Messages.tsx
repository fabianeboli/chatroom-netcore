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
            if (id === undefined) return;
            const setOfMessages = await fetchService.getMessages(id);
            setMessages(messages => [messages, ...setOfMessages]);
        }
        const timer = setTimeout(() => {
            fetchMessages();
        }, 300);

        return () => clearTimeout(timer);
    }, );


    return (
        <div>
            {messages.length > 0 && messages.map(({username, date, text}) => (
                <Message username={username} date={date} text={text}/>
            ))}
        </div>
    );
};

export default Messages;
