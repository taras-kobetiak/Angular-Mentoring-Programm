import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { isLoginFalse, isLoginTrue } from "../actions/isLogin.action";


export const ISLOGIN_KEY = 'isLogin';

export interface isLoginState {
    isLogin: boolean;
}

export const initialState: isLoginState = {
    isLogin: false
}

export const isLoginReducer = createReducer(
    initialState,
    on(isLoginFalse, state => ({ isLogin: false })),
    on(isLoginTrue, state => ({ isLogin: true })),
)

export const featureSelector = createFeatureSelector<isLoginState>(ISLOGIN_KEY);

export const isLoginSelector = createSelector(
    featureSelector,
    state => state.isLogin
)