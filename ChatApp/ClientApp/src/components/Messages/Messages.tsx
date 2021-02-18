import React, {useEffect, useState} from 'react';
import {IMessage} from "../../Interfaces";
import Message from "../Message/Message";
import {useParams} from "react-router";
import fetchService from "../../services/fetchService";
import {useSelector} from "react-redux";
import {Container} from "reactstrap";

const Messages = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const {id} = useParams();
    const loginInfo = useSelector((state: any) => state.login);
    useEffect(() => {
        const fetchMessages = async () => {
            if (id === undefined) return;
            const setOfMessages = await fetchService.getMessages(id, loginInfo.token);
            setMessages(messages => [messages, ...setOfMessages]);
        }
        const timer = setTimeout(() => {
            fetchMessages();
        }, 300);

        return () => clearTimeout(timer);
    },);


    return (
        <Container>
            {messages && messages.map(({username, date, text}) => (
                <div>
                {text && (<Message username={username} date={date} text={text}/>)}
                </div>
            ))}
        </Container>
    );
};

export default Messages;
