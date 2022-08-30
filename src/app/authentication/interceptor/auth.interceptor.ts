import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUserEntyty } from "src/app/interfaces/user-entyty.interface";
import { AuthServiceService } from "../services/auth-service.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    currentUserToken: string;
    constructor(private authService: AuthServiceService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.currentUserToken = this.authService.getToken() || '';

        const clonedRequest = req.clone({
            headers: req.headers.set("AUTH_TOKEN", this.currentUserToken)
        })
        return next.handle(clonedRequest);
    }
}
