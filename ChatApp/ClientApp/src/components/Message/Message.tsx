import React from 'react';
import {IMessage} from "../../Interfaces";
import {CardBody, CardText, CardTitle, ListGroupItem} from "reactstrap";

const Message = ({username, date, text}: IMessage) => {

    return (
        <ListGroupItem>
            <CardTitle>
                <h5>Username: {username}</h5>
                <h6>{date}</h6>
            </CardTitle>

            <CardBody>
                <CardText>{text}</CardText>
            </CardBody>
        </ListGroupItem>
    );
};

export default Message;
