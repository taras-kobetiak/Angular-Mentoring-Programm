import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AUTHORS_KEY, IAuthorsState } from "./authors.reducer";

export const featureSelector = createFeatureSelector<IAuthorsState>(AUTHORS_KEY);

export const AuthorsSelector = createSelector(
    featureSelector,
    state => state.authors
)

export const AuthorsIsLoadingSelector = createSelector(
    featureSelector,
    state => state.isLoading
)



