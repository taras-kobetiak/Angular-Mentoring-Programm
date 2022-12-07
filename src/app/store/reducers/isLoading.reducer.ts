import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { isLoadingAddCoursePageFalse, isLoadingAddCoursePageTrue, isLoadingLoginFalse, isLoadingLoginTrue, isLoadingPagesBlockFalse, isLoadingPagesBlockTrue } from "../actions/isLoading.action";

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
    on(isLoadingLoginTrue, state => ({ isLoading: true })),
    on(isLoadingPagesBlockFalse, state => ({ isLoading: false })),
    on(isLoadingPagesBlockTrue, state => ({ isLoading: true })),
)


export const featureSelector = createFeatureSelector<isLoadingState>(ISLOADING_KEY);

export const isLoadingSelector = createSelector(
    featureSelector,
    state => state.isLoading
)