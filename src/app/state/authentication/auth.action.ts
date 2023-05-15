import { createAction, props } from '@ngrx/store'
import { IUserEntyty } from 'src/app/interfaces/user-entyty.interface';

export const loginAction = createAction(
    '[LOGIN PAGE] login',
    props<{ currentUser: IUserEntyty }>()
)
export const loginSuccessAction = createAction(
    '[LOGIN PAGE] login success',
    props<{ user: IUserEntyty }>()
)
export const loginFailedAction = createAction(
    '[LOGIN PAGE] login failed',
)

export const logoutAction = createAction('[HEADER] logout');
export const logoutSuccessAction = createAction('[HEADER] logout success');
export const logoutFailedAction = createAction('[HEADER] logout failed');