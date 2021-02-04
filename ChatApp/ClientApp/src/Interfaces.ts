export interface IChatRoom {
    name: string; 
    id: string;
}

export interface IUser {
    username: string;
    password: string;
    email: string;
    subscribedChatRooms: IChatRoom[]
}

export interface IMessage {
    author: string;
    date: string; 
    text: string;
}