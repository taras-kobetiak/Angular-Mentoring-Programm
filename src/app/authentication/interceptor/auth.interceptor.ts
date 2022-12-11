import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subject, takeUntil } from "rxjs";
import { currentUserSelector } from "src/app/state/authentication/auth.selector";
import { AuthServiceService } from "../services/auth-service.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor, OnDestroy {
    currentUserToken: string;
    private unsubscribingData$: Subject<void> = new Subject<void>();
    constructor(private store: Store) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.store.select(currentUserSelector).pipe(
            takeUntil(this.unsubscribingData$),
        ).subscribe(user => {
            this.currentUserToken = user.token;
        })

        const clonedRequest = req.clone({
            headers: req.headers.set("AUTH_TOKEN", this.currentUserToken)
        })
        return next.handle(clonedRequest);
    }

    ngOnDestroy(): void {
        this.unsubscribingData$.next();
        this.unsubscribingData$.complete();
    }

}