import React, {useState} from 'react';
import fetchService from "../../services/fetchService";
import {useSelector} from "react-redux";
import {Container, Form, FormGroup, Input} from "reactstrap";

const NewChatRoom = () => {
    const [name, setName] = useState<string>("");
    const loginInfo = useSelector((state: any) => state.login);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const isChatRoomAdded = await fetchService.newChatRoom(name, loginInfo.id, loginInfo.token);
        isChatRoomAdded && window.history.back();
    }

    return (
        <Container className="mx-auto col-lg-8 col-md-6">
            <h1 className="text-center">Create New Chat Room</h1>
            <Form inline className="flex justify-content-center">
                <FormGroup row>
                    <Input className="text-center my-2 mx-auto" type="text"
                           name="name" placeholder="name" value={name}
                           onChange={({target}) => setName(target.value)}/>
                    <button className="btn btn-primary px-2 mx-1" type="submit" onClick={handleSubmit}>Add Chatroom
                    </button>
                </FormGroup>

            </Form>
        </Container>
    )
}

export default NewChatRoom;
