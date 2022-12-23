import { createAction, props } from "@ngrx/store";
import { IAuthor } from "src/app/interfaces/authors.interface";

export const getAuthorsAction = createAction('[COURSE AUTHORS] get authors list');
export const getAuthorsSuccessAction = createAction('[COURSE AUTHORS] get authors list success',
    props<{ authorsList: IAuthor[] }>());
export const getAuthorsFailedAction = createAction('[COURSE AUTHORS] get authors list failed');

export const getFilteredAuthorsAction = createAction('[COURSE AUTHORS] get filtered authors list',
    props<{ inputData: string }>());
export const getFilteredAuthorsSuccessAction = createAction('[COURSE AUTHORS] get filtered  authors list success',
    props<{ authorsList: IAuthor[] }>());
export const getFilteredAuthorsFailedAction = createAction('[COURSE AUTHORS] get filtered  authors list failed');



