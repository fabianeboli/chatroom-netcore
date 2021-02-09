import {MouseEvent} from "react";

export interface IChatRoom {
    name: string; 
    id: string;
}

export interface INewUser {
    username: string;
    password: string;
    email: string;
    //subscribedChatRooms: IChatRoom[]
}

export interface ILoggedUser {
    username: string;
    email: string;
    subscribedChatRooms: IChatRoom[];
    token: string;
}

export interface IMessage {
    author: string;
    date: string; 
    text: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IReducer {
    login: any; 
}

export type MouseEvent = MouseEvent<HTMLButtonElement, MouseEvent>;