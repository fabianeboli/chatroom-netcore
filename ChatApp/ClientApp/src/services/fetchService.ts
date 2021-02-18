import {IChatRoom, ILogin, INewMessage, INewUser} from "../Interfaces";

const chatController = "api/chatroom";
const userController = "api/user";
const loginUrl = "api/user/login";

enum Method {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

const options = (method: Method, body: any = "", token: string = "") => {
    const request = {
        method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `bearer ${token}`
        }
    };

    return body ? {
        ...request,
        body: JSON.stringify(body),
    } : {
        ...request
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

const newChatRoom = async (name: string, userId: string, token: string) => {
    const response = await fetch(chatController, options(Method.POST, {name, userId}, token));
    if (!response.ok) console.log(`Error: ${response.status}`);
    return response.ok;
}

const editChatRoom = async (editedChatRoom: IChatRoom, token: string) => {
    const response = await fetch(`${chatController}/${editedChatRoom.id}`, options(Method.PUT, editedChatRoom, token));
    if (!response.ok) console.log(`Error: ${response.status}`);
    return response.ok;
}

const deleteChatRoom = async (id: string, userId: string, token: string) => {
    const response = await fetch(`${chatController}/${id}`, options(Method.DELETE, userId, token));
    return response.ok;
}

// messages
const getMessages = async (chatRoomId: string, token: string): Promise<any[]> => {
    const response = await fetch(`${chatController}/${chatRoomId}/message`, options(Method.GET, "", token));
    return response.ok ? response.json() : [];
}

const newMessage = async (chatRoomId: string, message: INewMessage, token: string) => {
    const response = await fetch(`${chatController}/${chatRoomId}/message`, options(Method.POST, message, token))
    return response.ok;
}

//subscriptions 



export default {
    getChats,
    login,
    signUp,
    newChatRoom,
    editChatRoom,
    deleteChatRoom,
    getMessages,
    newMessage
};