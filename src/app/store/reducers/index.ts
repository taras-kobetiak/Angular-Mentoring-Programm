import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { ISLOADING_KEY, isLoadingState, isLoadingReducer } from './isLoading.reducer';
import { isLoginReducer, isLoginState, ISLOGIN_KEY } from './isLogin.reducer';

export interface State {
  [ISLOADING_KEY]: isLoadingState;
  [ISLOGIN_KEY]: isLoginState;
}

export const reducers: ActionReducerMap<State> = {
  [ISLOADING_KEY]: isLoadingReducer,
  [ISLOGIN_KEY]: isLoginReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
