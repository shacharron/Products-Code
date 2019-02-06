import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})


export class HttpInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        //if (req.url.indexOf('/upload/file') === -1) {
        alert(req.url);
        return next.handle(req); // do nothing
        ///}
        //const delay = 300;
        // Create simulation of upload event stream
        //return createUploadEvents(delay);
    }
}
