import { createAction, props } from '@ngrx/store'
import { IUserEntyty } from 'src/app/interfaces/user-entyty.interface';

export const isAuthHeaderFalse = createAction('[HEADER ISAUTH] false');
export const isAuthLoginPageTrue = createAction('[LOGINPAGE ISAUTH] true');

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

