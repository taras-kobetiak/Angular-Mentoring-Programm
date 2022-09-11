import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UrlInterceptorInterceptor implements HttpInterceptor {

  serverPath: string = 'http://localhost:3000/'
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const clonedRequest = request.clone({
      url: `${this.serverPath}${request.url}`
    })

    return next.handle(clonedRequest);
  }
}

