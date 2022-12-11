import { createReducer, on } from "@ngrx/store";
import { IUserEntyty } from "src/app/interfaces/user-entyty.interface";
import { loginAction, isAuthHeaderFalse, isAuthLoginPageTrue, loginSuccessAction } from "./auth.action";

export const AUTH_KEY = 'auth';
export const USER_KEY = 'user';

export interface authState {
    isAuth: boolean;
    user: IUserEntyty;
}

export const initialState: authState = {
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





