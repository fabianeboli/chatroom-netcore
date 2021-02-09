import {ILogin, INewUser} from "../Interfaces";

const chatController = "api/chatroom";
const userController = "api/user";
const loginUrl = "api/user/login"

const postOptions = (body: INewUser | ILogin | string) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
    }
    return options;
};


const getChats = async () => {
    const chats = await fetch(chatController);
    return chats.ok ? await chats.json() : alert("No chats found");
}

const login = async (user: ILogin) => {
    const response = await fetch(loginUrl, postOptions(user));
    if (response.ok) {
        return await response.json();
    }
    return "Error";

}

const signUp = async (user: INewUser) => {
    const response = await fetch(userController, postOptions(user));
    return response.ok;
};

const newChatRoom = async (name: string) => {
    const response = await fetch(chatController, postOptions(name));
    if (!response.ok) console.log(`Error: ${response.status}`) 
    return response.ok;
}

export default {getChats, login, signUp, newChatRoom};