import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { ISLOADING_KEY, isLoadingState, isLoadingReducer } from './isLoading.reducer';
import { isAuthReducer, isAuthState, ISLOGIN_KEY } from './isAuth.reducer';

export interface State {
  [ISLOADING_KEY]: isLoadingState;
  [ISLOGIN_KEY]: isAuthState;
}

export const reducers: ActionReducerMap<State> = {
  [ISLOADING_KEY]: isLoadingReducer,
  [ISLOGIN_KEY]: isAuthReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
