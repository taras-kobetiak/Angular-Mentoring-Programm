import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthServiceService } from "../authentication/services/auth-service.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthServiceService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        this.authService.isAuthenticated().subscribe(isAuth => {
            if (!isAuth) {
                this.router.navigate(['/login']);
            }
            // i dont know why I can`t return all this statement and here return true and false in if/else
        })
        return this.authService.isAuthenticated();
    }
}