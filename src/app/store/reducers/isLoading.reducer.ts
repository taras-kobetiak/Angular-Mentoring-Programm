import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { isLoadingFalse, isLoadingTrue } from "../actions/isLoading.action";

export const ISLOADING_KEY = 'isLoading';

export interface isLoadingState {
    isLoading: boolean;
}

export const initialState: isLoadingState = {
    isLoading: false
}

export const isLoadingReducer = createReducer(
    initialState,
    on(isLoadingFalse, state => ({ isLoading: false })),
    on(isLoadingTrue, state => ({ isLoading: true })),
)

export const featureSelector = createFeatureSelector<isLoadingState>(ISLOADING_KEY);

export const isLoadingSelector = createSelector(
    featureSelector,
    state => state.isLoading
)