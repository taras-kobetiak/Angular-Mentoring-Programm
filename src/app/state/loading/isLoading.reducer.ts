import { createReducer, on } from "@ngrx/store";
import { isLoadingAddCoursePageFalse, isLoadingAddCoursePageTrue, isLoadingLoginErrorFalse, isLoadingLoginFalse, isLoadingLoginTrue, isLoadingPagesBlockFalse, isLoadingPagesBlockTrue } from "./isLoading.action";

export const ISLOADING_KEY = 'isLoading';

export interface IIsLoadingState {
    isLoading: boolean;
}

export const initialState: IIsLoadingState = {
    isLoading: false
}

export const isLoadingReducer = createReducer(
    initialState,
    on(isLoadingAddCoursePageFalse, state => ({ ...state, isLoading: false })),
    on(isLoadingAddCoursePageTrue, state => ({ ...state, isLoading: true })),
    on(isLoadingLoginFalse, state => ({ ...state, isLoading: false })),
    on(isLoadingLoginErrorFalse, state => ({ ...state, isLoading: false })),
    on(isLoadingLoginTrue, state => ({ ...state, isLoading: true })),
    on(isLoadingPagesBlockFalse, state => ({ ...state, isLoading: false })),
    on(isLoadingPagesBlockTrue, state => ({ ...state, isLoading: true })),
)


