import {MouseEvent} from "react";

export interface IChatRoom {
    name: string; 
    id: string;
    userId: number;
}

export interface INewUser {
    username: string;
    password: string;
    email: string;
    //subscribedChatRooms: IChatRoom[]
}

export interface ILoggedUser {
    id: string;
    username: string;
    email: string;
    subscribedChatRooms: IChatRoom[];
    token: string;
}

export interface IMessage {
    username: string;
    date: string; 
    text: string;
}

export interface INewMessage {
    author: string;
    text: string;
    userId: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IReducer {
    login: any; 
}

export type MouseEvent = MouseEvent<HTMLButtonElement, MouseEvent>;