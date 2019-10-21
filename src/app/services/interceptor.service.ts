import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor
  //HttpResponse,
  //HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';


@Injectable()
export class InterceptorService implements HttpInterceptor {
  
  constructor(private storage: Storage) { }
  
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const tokenPromise = this.storage.get('token');
    
    const token = from(tokenPromise);
    
    return token.pipe(mergeMap(token => {
      let clonedReq = this.addToken(request, token);
      return next.handle(clonedReq);
    }));
  }
  
  // Adds the token to your headers if it exists
  private addToken(request: HttpRequest<any>, token: any) {
    if (token) {
      let clone: HttpRequest<any>;
      clone = request.clone({
        setHeaders: {
          // Accept: `application/json`,
          // 'Content-Type': `application/json`,
          Authorization: `Bearer ${token}`
        }
      });
      return clone;
    }
    
    return request;
  }
  
}