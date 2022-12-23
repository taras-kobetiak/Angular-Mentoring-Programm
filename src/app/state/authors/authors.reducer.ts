import { createReducer, on } from "@ngrx/store";
import { IAuthor } from "src/app/interfaces/authors.interface";
import { getAuthorsAction, getAuthorsFailedAction, getAuthorsSuccessAction, getFilteredAuthorsAction, getFilteredAuthorsFailedAction, getFilteredAuthorsSuccessAction } from "./authors.action";

export const AUTHORS_KEY = 'authors';

export interface IAuthorsState {
    authors: IAuthor[];
    isLoading: boolean;
}

export const initialState: IAuthorsState = {
    authors: [],
    isLoading: false
}

export const authorsReduceer = createReducer(
    initialState,

    on(getAuthorsAction, getFilteredAuthorsAction, (state) => ({
        ...state,
        isLoading: true
    })),

    on(getAuthorsSuccessAction, getFilteredAuthorsSuccessAction, (state, action) => ({
        ...state,
        authors: action.authorsList,
        isLoading: false
    })),

    on(getAuthorsFailedAction, getFilteredAuthorsFailedAction, (state) => ({
        ...state,
        isLoading: false
    }))
)