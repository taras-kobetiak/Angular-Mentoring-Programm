import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServiceService } from "../header/services/auth-service.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    currentUser: string | undefined;

    constructor(private authService: AuthServiceService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        this.currentUser = this.authService.getUserInfo().email || 'invalid'

        if (this.currentUser !== 'invalid') {
            return this.authService.isAuthenticated()
        }
        this.router.navigate(['/login'])
        return false;
    }
}