import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { ISLOADING_KEY, isLoadingState, isLoadingReducer } from './loading/isLoading.reducer';
import { authReducer, authState, AUTH_KEY } from './authentication/auth.reducer';

export interface State {
  [ISLOADING_KEY]: isLoadingState;
  [AUTH_KEY]: authState;
}

export const reducers: ActionReducerMap<State> = {
  [ISLOADING_KEY]: isLoadingReducer,
  [AUTH_KEY]: authReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
