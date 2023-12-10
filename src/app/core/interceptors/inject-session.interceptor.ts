import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private cookisService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try{
      let newRequest = request;
      const token = this.cookisService;
      newRequest = request.clone(
        {
          setHeaders: {
            authorization: `Bearer ${token}`
          }
        }
      )

    } catch (e) {
      console.log('Error! 👀👀', request)
    }
    
    
    //rewRequest 
    return next.handle(request);
  }
}
