import {ILoggedUser} from "../Interfaces";

export enum actTypes {
    "SIGN_IN",
    "RETRIEVE",
    "SIGN_OUT"
}

//action creators
export interface ILogin {
    type: actTypes;
    username: string;
    email: string;
}

export interface ILogOut {
    type: actTypes;
}

export const storeLogin = (login: ILoggedUser) => {
    return {
        type: actTypes.SIGN_IN,
        login
    }
}

export const deleteLogin = () => {
    return {
        type: actTypes.SIGN_OUT
    }
}

//reducer
const initialState: ILoggedUser = {
    id: localStorage.getItem("id") || "",
    email: localStorage.getItem("email") || "",
    subscribedChatRooms: localStorage.getItem("subscribedChatRooms") && JSON.parse(localStorage.getItem("subscribedChatRooms") as string) || "",
    token: localStorage.getItem("token") || "",
    username: localStorage.getItem("username") || ""
};

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actTypes.SIGN_IN:
            localStorage.setItem("id", action.login.id);
            localStorage.setItem("email", action.login.email);
            localStorage.setItem("username", action.login.username);
            localStorage.setItem("subscribedChatRooms", action.login.subscribedChatRooms);
            localStorage.setItem("token", action.login.token);
            return {...action.login};
        case actTypes.SIGN_OUT:
            localStorage.clear();
            return {...initialState};
        default:
            return state;
    }
}

