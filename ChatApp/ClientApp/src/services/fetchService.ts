import {ILogin, INewUser} from "../Interfaces";

const chatController = "api/chatroom";
const userController = "api/user";
const loginUrl = "api/user/login";

enum Method {
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE"
}

const options = (method: Method, body: any) => {
    return {
        method: method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
    };
}

// user
const login = async (user: ILogin) => {
    const response = await fetch(loginUrl, options(Method.POST, user));
    if (response.ok) {
        return await response.json();
    }
    return "Error";
}

const signUp = async (user: INewUser) => {
    const response = await fetch(userController, options(Method.POST, user));
    return response.ok;
};

// ChatRoom
const getChats = async () => {
    const chats = await fetch(chatController);
    return chats.ok ? await chats.json() : alert("No chats found");
}

const newChatRoom = async (name: string, userId: string) => {
    const response = await fetch(chatController, options(Method.POST, {name, userId}));
    if (!response.ok) console.log(`Error: ${response.status}`);
    return response.ok;
}

const editChatRoom = async (id: string, name: string, userId: string) => {
    const response = await fetch(`${chatController}/${id}`,
        options(Method.PUT, {id, name, userId}));
    if (!response.ok) console.log(`Error: ${response.status}`);
    return response.ok;
}

const deleteChatRoom = async (id:string, userId: string) => {
    const response = await fetch(`${chatController}/${id}`, options(Method.DELETE, userId));
    return response.ok;
}

//messages
const getMessages = async (chatRoomId: string) => {
    const response = await fetch(`${chatController}/${chatRoomId}`);
    return response.ok;
}


export default {
    getChats,
    login,
    signUp,
    newChatRoom,
    editChatRoom,
    deleteChatRoom,
    getMessages
};