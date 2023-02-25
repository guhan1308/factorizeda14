import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { share, map, tap } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  private cache = new Map<string, any>();
  private dirtyFlag = new Map<string, any>();

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Cache Interceptor");
    console.log("request.url" + request.url);
    console.log("request.method" + request.method);
   
    return next.handle(request);
    /*
    if (request.method !== 'GET') {
      this.dirtyFlag.set(request.url,true);
      return next.handle(request);
    }

    if (!this.dirtyFlag.get(request.url) ){
      return next.handle(request).pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            this.cache.set(request.url, event);
            this.dirtyFlag.set(request.url,false);
          }
        })
      ); 
    }
   const cachedResponse = this.cache.get(request.url);
      if (cachedResponse) {
        console.log("Getting from cache");
        return of(cachedResponse);
      }
     else {
      return next.handle(request).pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            this.cache.set(request.url, event);
            this.dirtyFlag.set(request.url,false);

          }
        })
      );

     } 


     */
  
    } 
    
}
