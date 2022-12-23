import { createReducer, on } from "@ngrx/store";
import { IUserEntyty } from "src/app/interfaces/user-entyty.interface";
import { logoutAction, loginAction, loginFailedAction, loginSuccessAction, logoutSuccessAction, logoutFailedAction } from "./auth.action";

export const AUTH_KEY = 'auth';

export interface IAuthState {
    isAuth: boolean;
    user: IUserEntyty;
    isLoading: boolean
}

export const initialState: IAuthState = {
    isAuth: Boolean(localStorage.getItem('token')),
    user: JSON.parse(localStorage.getItem('currentUser')!) || {
        id: "",
        firstName: "",
        email: "",
        password: "",
        token: ""
    },
    isLoading: false
}

export const authReducer = createReducer(
    initialState,

    on(loginAction, logoutAction, state => ({ ...state, isLoading: true })),

    on(loginSuccessAction, (state, action) => ({
        ...state,
        user: action.user,
        isAuth: true,
        isLoading: false
    })),

    on(logoutSuccessAction, state => ({ ...state, isAuth: false, isLoading: false })),
    on(loginFailedAction, logoutFailedAction, state => ({ ...state, isLoading: false })),
)





