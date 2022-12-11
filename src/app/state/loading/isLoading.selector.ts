import { createFeatureSelector, createSelector } from "@ngrx/store";
import { isLoadingState, ISLOADING_KEY } from "./isLoading.reducer";

export const featureSelector = createFeatureSelector<isLoadingState>(ISLOADING_KEY);

export const isLoadingSelector = createSelector(
    featureSelector,
    state => state.isLoading
)