import {ILogin, INewUser} from "../Interfaces";

const chatControllerUrl = "api/chat";
const userControllerUrl = "api/user";
const loginUrl = "api/user/login"


const postOptions = (user: INewUser | ILogin) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }
    return options;
};


const getChats = async () => {
    const chats = await fetch(chatControllerUrl);
    return chats.ok ? await chats.json() : alert("No chats found");
}

const login = async (user: ILogin) => {
    const response = await fetch(loginUrl, postOptions(user));
    console.log(response);
    if (response.ok) {
        const result = await response.json();
        return result;
    }
    return "Error";

}


const signUp = async (user: INewUser) => {
    const response = await fetch(userControllerUrl, postOptions(user));
    return response.ok && await response.json();
};

export default {getChats, login, signUp};