import { createReducer, on } from "@ngrx/store";
import { IUserEntyty } from "src/app/interfaces/user-entyty.interface";
import { loginAction, isAuthHeaderFalse, isAuthLoginPageTrue, loginSuccessAction } from "./auth.action";

export const AUTH_KEY = 'auth';

export interface IAuthState {
    isAuth: boolean;
    user: IUserEntyty;
}

export const initialState: IAuthState = {
    isAuth: Boolean(localStorage.getItem('token')),
    user: JSON.parse(localStorage.getItem('currentUser')!) || {
        id: "",
        firstName: "",
        email: "",
        password: "",
        token: ""
    }
}

export const authReducer = createReducer(
    initialState,
    on(isAuthHeaderFalse, state => ({ ...state, isAuth: false })),
    on(isAuthLoginPageTrue, state => ({ ...state, isAuth: true })),
    on(loginSuccessAction, (state, action) => ({
        ...state,
        user: action.user
    }))
)





