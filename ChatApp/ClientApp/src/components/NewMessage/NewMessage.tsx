import React, {useState} from 'react';
import fetchService from "../../services/fetchService";
import {useParams} from "react-router";
import {INewMessage} from "../../Interfaces";
import {useSelector} from "react-redux";
import {Button, Container, Form, Input, InputGroup, InputGroupAddon} from "reactstrap";

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
        <Container>
            <Form>
                <InputGroup className="py-2 my-2">
                    <Input type="text"
                           value={newMessage}
                           onChange={({target}) => setNewMessage(target.value)}/>

                    <InputGroupAddon addonType="append">
                        <Button color="primary" type="submit" disabled={newMessage.length == 0} onClick={handleSubmit}>
                            Submit
                        </Button>
                    </InputGroupAddon>
                </InputGroup>

            </Form>

        </Container>
    );
};

export default NewMessage;
