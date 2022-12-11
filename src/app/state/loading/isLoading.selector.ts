import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IIsLoadingState, ISLOADING_KEY } from "./isLoading.reducer";

export const featureSelector = createFeatureSelector<IIsLoadingState>(ISLOADING_KEY);

export const isLoadingSelector = createSelector(
    featureSelector,
    state => state.isLoading
)