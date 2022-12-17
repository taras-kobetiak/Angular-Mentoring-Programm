import { createAction, props } from "@ngrx/store";
import { IAuthors } from "src/app/interfaces/authors.interface";


export const getAuthorsAction = createAction('[COURS AUTHORS] get authors list');
export const getAuthorsSuccessAction = createAction('[COURS AUTHORS] get authors list success',
    props<{ authorsList: IAuthors[] }>());
export const getAuthorsFailedAction = createAction('[COURS AUTHORS] get authors list failed');

export const getFilteredAuthorsAction = createAction('[COURS AUTHORS] get filtered authors list',
    props<{ inputData: string }>());
export const getFilteredAuthorsSuccessAction = createAction('[COURS AUTHORS] get filtered  authors list success',
    props<{ authorsList: IAuthors[] }>());
export const getFilteredAuthorsFailedAction = createAction('[COURS AUTHORS] get filtered  authors list failed');

