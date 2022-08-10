import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUserEntyty } from "src/app/interfaces/user-entyty.interface";
import { AuthServiceService } from "../services/auth-service.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    userData: IUserEntyty;
    constructor(private authService: AuthServiceService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        async () => {
            let response = await this.authService.getUserInfo('taras@.com');
            let userData = await response.json();
            this.userData = userData;
        }
        let userToken = this.userData.token;
        console.log(userToken);

        const clonedRequest = req.clone({
            headers: req.headers.set("AUTH_TOKEN", userToken)
        })
        return next.handle(clonedRequest)
    }
}