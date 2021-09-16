import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let UserId = "Admin";
    let Password = "123456";

    let AuthHeader = "Basic " + window.btoa(UserId + ":" + Password);

    request = request.clone(
      {
        setHeaders : {Authorization: AuthHeader }
      });

    return next.handle(request);
  }
}
