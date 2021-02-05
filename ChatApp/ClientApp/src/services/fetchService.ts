import {ILogin} from "../Interfaces";

const chatControllerUrl = "api/chat";
const userControllerUrl = "api/user";
const loginUrl = "api/user/login"

const getChats = async () => {
    const chats = await fetch(chatControllerUrl);
    return chats.ok ? await chats.json() : alert("No chats found");
}

const login = async (user: ILogin) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }


    const response = await fetch(loginUrl, options);
    console.log(response);
    if (response.ok) {
        const result = await response.json();
        console.log("result user: " + result.token);
        return result;
    }
    return "Error";

}

export default {getChats, login};