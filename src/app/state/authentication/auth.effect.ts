import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, filter, map, switchMap, tap } from "rxjs/operators";
import { AuthServiceService } from "src/app/authentication/services/auth-service.service";
import { IUserEntyty } from "src/app/interfaces/user-entyty.interface";
import { isLoadingLoginErrorFalse } from "../loading/isLoading.action";
import { isAuthLoginPageTrue, loginAction, loginFailedAction, loginSuccessAction } from "./auth.action";


@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthServiceService,
        private router: Router,
        private store: Store
    ) { }

    currentUser$ = createEffect(() => this.actions$.pipe(
        ofType(loginAction),
        switchMap(({ currentUser }) => this.authService.getUserInfo(currentUser).pipe(
            filter((users: IUserEntyty[]) => {
                if (!Boolean(users.length)) {
                    this.onWrongData()
                }
                return Boolean(users.length)
            }),
            map((users: IUserEntyty[]) => {
                this.store.dispatch(isAuthLoginPageTrue());
                return loginSuccessAction({ user: users[0] })
            }),
            tap(({ user }) => {
                localStorage.setItem('token', user.token);
                localStorage.setItem(`currentUser`, JSON.stringify(user));
                this.router.navigate(['/courses']);
            }),
            catchError(() => {
                this.onWrongData();
                return of(loginFailedAction)
            })
        ))
    ))

    onWrongData(): void {
        alert('wrong data, please check your email and password');
        this.store.dispatch(isLoadingLoginErrorFalse());
    }
}