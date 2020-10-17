import { Injectable } from '@angular/core';
import {
  HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/usermodel';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url !== '/api/users') {
      const currentUser: User = JSON.parse(localStorage.getItem('User'));
      const headers = new HttpHeaders().set(
        'username',
        currentUser && currentUser.name
      );
      request = request.clone({ headers });
    }
    return next.handle(request);
  }
}
