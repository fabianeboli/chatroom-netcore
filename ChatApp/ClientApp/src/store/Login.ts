import {IUser} from "../Interfaces";

export enum actTypes {
    "SIGN_IN",
    "SIGN_OUT"
}

//action creators
export interface ILogin {
    type: actTypes;
    email: string;
    password: string;
}

export interface ILogOut {
    type: actTypes;
}

export const Login = (user: IUser) => {
    return async (dispatch: unknown) => {
        // TODO 
    }
}

export const Logout = (user: IUser) => {
    return async (dispatch: unknown) => {
        // TODO
        // dispatch({
        //    
        // })
    }
}


//reducer
const initialState: any[] = [];

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actTypes.SIGN_IN:
            return state;
        case actTypes.SIGN_OUT:
            return state;
        default:
            return state;
    }
}

