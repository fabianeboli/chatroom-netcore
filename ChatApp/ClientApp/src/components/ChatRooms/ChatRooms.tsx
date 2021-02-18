import React, {useEffect, useState} from 'react';
import {IChatRoom} from "../../Interfaces";
import ChatRoom from "./ChatRoom/ChatRoom";
import fetchService from "../../services/fetchService";
import {Container, Row} from "reactstrap";

const ChatRooms = () => {
    const [chatRooms, setChatRooms] = useState<IChatRoom[]>([]);

    useEffect(() => {
        const fetch = async () => {
            setChatRooms(await fetchService.getChats());
        }
        fetch();
    }, []);


    return (
            <Container>
                <h1 className="text-center">Chat Rooms</h1>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3">
                    {chatRooms.map(({name, id, userId}) => (
                        <>
                            <ChatRoom name={name} id={id} userId={userId}/>
                        </>
                    ))}
                </Row>
            </Container>
    );
};

export default ChatRooms;
