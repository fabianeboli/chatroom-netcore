import React from 'react';
import {IChatRoom} from "../../../Interfaces";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Button, ButtonGroup, Card, CardBody, Col} from "reactstrap";
import EditChatRoom from "../../EditChatRoom/EditChatRoom";
import DeleteChatRoom from "../../DeleteChatRoom/DeleteChatRoom";


const ChatRoom = ({name, id, userId}: IChatRoom) => {
    const loginInfo = useSelector((state: any) => state.login);
    console.log(userId, loginInfo.id, loginInfo.id == userId);

    return (
        <Col className="my-2">
            <Card>
                <CardBody className="shadow-sm text-center">
                    <h4>#{id}</h4>
                    <h4>{name}</h4>
                    <div className="flex row justify-content-around my-2">
                        {loginInfo.id && (
                            <Link to={`${id}`}>
                                <Button color="primary" className="my-auto">Go to chatroom</Button>
                            </Link>
                        )}

                        {Number(loginInfo.id) === userId && (
                            <>
                                <ButtonGroup>
                                    <EditChatRoom id={id}/>
                                    <DeleteChatRoom id={id}/>
                                </ButtonGroup>
                            </>
                        )}
                    </div>
                </CardBody>
            </Card>

        </Col>
    );
};

export default ChatRoom;
