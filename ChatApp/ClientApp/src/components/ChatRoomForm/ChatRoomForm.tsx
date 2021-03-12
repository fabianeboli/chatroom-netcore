import React, {useState} from "react";
import {useSelector} from "react-redux";

interface IChatRoomForm {
    name: string;
    fetchService: (userId: string ,editedChatRoomName?: string) => {};
    chatroomName?: string;
}

const ChatRoomForm = (props: IChatRoomForm) => {
    const [name, setName] = useState<string>("");
    const loginInfo = useSelector((state: any) => state.login);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const response = await props.fetchService;
        console.log(response);
    }

    return (
        <div>
            <>
                <h1>{props.name}</h1>
                <input type="text" name="name" placeholder="name" value={name}
                       onChange={({target}) => setName(target.value)}/>
                <button type="submit" onClick={handleSubmit}>Add Chatroom</button>
            </>
        </div>
    );
};

export default ChatRoomForm;
