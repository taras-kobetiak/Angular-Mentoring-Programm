import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";
import { AuthServiceService } from "../authentication/services/auth-service.service";
import { isLoginSelector } from "../store/reducers/isAuth.reducer";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private store: Store,
        // private authService: AuthServiceService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {



        return this.store.select(isLoginSelector).pipe(
            tap((isAuth: boolean) => {
                if (!isAuth) {
                    this.router.navigate(['/login']);
                }
            })
        )
    }
}