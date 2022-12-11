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
import { courseListReducer, COURSES, ICourseState } from './courses-list/courses.reducer';

export interface State {
  [ISLOADING_KEY]: IIsLoadingState;
  [AUTH_KEY]: IAuthState;
  [COURSES]: ICourseState;
}

export const reducers: ActionReducerMap<State> = {
  [ISLOADING_KEY]: isLoadingReducer,
  [AUTH_KEY]: authReducer,
  [COURSES]: courseListReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
