import { createReducer, on } from "@ngrx/store";
import { IAuthor } from "src/app/interfaces/authors.interface";
import { getAuthorsSuccessAction, getFilteredAuthorsSuccessAction } from "./authors.action";

export const AUTHORS_KEY = 'authors';

export interface IAuthorsState {
    authors: IAuthor[];
}

export const initialState: IAuthorsState = {
    authors: []
}

export const authorsReduceer = createReducer(
    initialState,
    on(getAuthorsSuccessAction, getFilteredAuthorsSuccessAction, (state, action) => ({
        ...state,
        authors: action.authorsList,
    })),

)