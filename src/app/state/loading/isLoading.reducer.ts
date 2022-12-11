import { createReducer, on } from "@ngrx/store";
import { isLoadingAddCoursePageFalse, isLoadingAddCoursePageTrue, isLoadingLoginErrorFalse, isLoadingLoginFalse, isLoadingLoginTrue, isLoadingPagesBlockFalse, isLoadingPagesBlockTrue } from "./isLoading.action";

export const ISLOADING_KEY = 'isLoading';

export interface isLoadingState {
    isLoading: boolean;
}

export const initialState: isLoadingState = {
    isLoading: false
}

export const isLoadingReducer = createReducer(
    initialState,
    on(isLoadingAddCoursePageFalse, state => ({ isLoading: false })),
    on(isLoadingAddCoursePageTrue, state => ({ isLoading: true })),
    on(isLoadingLoginFalse, state => ({ isLoading: false })),
    on(isLoadingLoginErrorFalse, state => ({ isLoading: false })),
    on(isLoadingLoginTrue, state => ({ isLoading: true })),
    on(isLoadingPagesBlockFalse, state => ({ isLoading: false })),
    on(isLoadingPagesBlockTrue, state => ({ isLoading: true })),
)


