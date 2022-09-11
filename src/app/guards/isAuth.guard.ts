import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthServiceService } from "../authentication/services/auth-service.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthServiceService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        return this.authService.isAuthenticated().pipe(
            tap((isAuth: boolean) => {
                if (!isAuth) {
                    this.router.navigate(['/login']);
                }
            })
        )
    }
}