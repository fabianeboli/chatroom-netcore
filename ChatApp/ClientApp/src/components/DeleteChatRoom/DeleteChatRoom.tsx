import React, {useState} from 'react';
import {useSelector} from "react-redux";
import fetchService from "../../services/fetchService";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

interface IDeleteChatRoom {
    id: string;
}

const DeleteChatRoom = ({id}: IDeleteChatRoom) => {
    const [name, setName] = useState<string>("");
    const loginInfo = useSelector((state: any) => state.login);
    const [modal, setModal] = useState<boolean>(false);
    
    const toggle = () => setModal(show => !show);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const isChatRoomDeleted = await fetchService.deleteChatRoom(id!, loginInfo.id, loginInfo.token);
        console.log(isChatRoomDeleted);
        isChatRoomDeleted && window.location.reload();
    }

    return (
        <>
            <Button color="danger" onClick={toggle}>
               Delete 
            </Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Delete ChatRoom
                </ModalHeader>
             
                <ModalBody>
                    <Button color="danger" type="submit" onClick={handleSubmit}>Delete Chatroom</Button>
                </ModalBody>
            </Modal>
        </>
    )
};

export default DeleteChatRoom;
