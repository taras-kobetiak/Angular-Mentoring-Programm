import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { isAuthHeaderFalse, isAuthLoginPageTrue } from "../actions/isAuth.action";


export const ISLOGIN_KEY = 'isLogin';

export interface isAuthState {
    isAuth: boolean;
}

export const initialState: isAuthState = {
    isAuth: Boolean(localStorage.getItem('token'))
}

export const isAuthReducer = createReducer(
    initialState,
    on(isAuthHeaderFalse, state => ({ isAuth: false })),
    on(isAuthLoginPageTrue, state => ({ isAuth: true })),
)

export const featureSelector = createFeatureSelector<isAuthState>(ISLOGIN_KEY);

export const isLoginSelector = createSelector(
    featureSelector,
    state => state.isAuth
)
