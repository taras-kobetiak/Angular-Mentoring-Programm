import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAuthState, AUTH_KEY } from "./auth.reducer";

export const featureSelector = createFeatureSelector<IAuthState>(AUTH_KEY);

export const isAuthSelector = createSelector(
    featureSelector,
    state => state.isAuth
)

export const currentUserSelector = createSelector(
    featureSelector,
    state => state.user
)


