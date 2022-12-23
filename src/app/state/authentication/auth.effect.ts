import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, filter, map, switchMap, tap } from "rxjs/operators";
import { AuthServiceService } from "src/app/authentication/services/auth-service.service";
import { IUserEntyty } from "src/app/interfaces/user-entyty.interface";
import { loginAction, loginFailedAction, loginSuccessAction, logoutAction, logoutFailedAction, logoutSuccessAction } from "./auth.action";

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthServiceService,
        private router: Router,
        private store: Store
    ) { }

    login$ = createEffect(() => this.actions$.pipe(
        ofType(loginAction),
        switchMap(({ currentUser }) => this.authService.getUserInfo(currentUser).pipe(
            filter((users: IUserEntyty[]) => {
                if (!Boolean(users.length)) {
                    this.onWrongData()
                }
                return Boolean(users.length)
            }),
            map((users: IUserEntyty[]) => {
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

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(logoutAction),
        tap(() => this.authService.logOut()),
        map(() => logoutSuccessAction()),
        catchError(() => of(logoutFailedAction()))

    ))

    onWrongData(): void {
        alert('wrong data, please check your email and password');
        this.store.dispatch(loginFailedAction())
    }
}