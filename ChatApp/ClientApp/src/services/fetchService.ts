const url = "ChatController";

const getChats = async () => {
    const chats = await fetch(url);
    return chats.ok ? chats.json() : alert("No chats found");
}

export default {getChats};