import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { ISLOADING_KEY, IIsLoadingState, isLoadingReducer } from './loading/isLoading.reducer';
import { authReducer, IAuthState, AUTH_KEY } from './authentication/auth.reducer';
import { courseListReducer, COURSES_KEY, ICourseState } from './courses/courses.reducer';
import { authorsReduceer, AUTHORS_KEY, IAuthorsState } from './authors/authors.reducer';

export interface State {
  [ISLOADING_KEY]: IIsLoadingState;
  [AUTH_KEY]: IAuthState;
  [COURSES_KEY]: ICourseState;
  [AUTHORS_KEY]: IAuthorsState
}

export const reducers: ActionReducerMap<State> = {
  [ISLOADING_KEY]: isLoadingReducer,
  [AUTH_KEY]: authReducer,
  [COURSES_KEY]: courseListReducer,
  [AUTHORS_KEY]: authorsReduceer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
