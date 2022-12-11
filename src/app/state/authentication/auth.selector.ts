import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authState, AUTH_KEY } from "./auth.reducer";



export const featureSelector = createFeatureSelector<authState>(AUTH_KEY);

export const isAuthSelector = createSelector(
    featureSelector,
    state => state.isAuth
)

export const currentUserSelector = createSelector(
    featureSelector,
    state => state.user
)


