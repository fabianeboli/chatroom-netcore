import React, {useState} from 'react';
import {useSelector} from "react-redux";
import fetchService from "../../services/fetchService";
import {IChatRoom} from "../../Interfaces";
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

interface IEditChatRoom {
    id: string;
}

const EditChatRoom = ({id} : IEditChatRoom) => {
    const [name, setName] = useState<string>("");
    const [modal, setModal] = useState<boolean>(false);
    const loginInfo = useSelector((state: any) => state.login);

    const toggle = () => setModal(show => !show);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const editedChatRoom: IChatRoom = {id: id!, name, userId: loginInfo.id}
        const isChatRoomEdited = await fetchService.editChatRoom(editedChatRoom, loginInfo.token);
        console.log(isChatRoomEdited);
        toggle();
        window.location.reload();
    }

    return (
        <>
            <Button color="warning" onClick={toggle}>
                Edit
            </Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Edit ChatRoom
                </ModalHeader>
                <ModalBody>
                    <Input className="text-center" type="text" name="name" placeholder="name" value={name}
                           onChange={({target}) => setName(target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="warning" type="submit" onClick={handleSubmit}>Edit Chatroom</Button>
                </ModalFooter>
            </Modal>
        </>
    )
};

export default EditChatRoom;
