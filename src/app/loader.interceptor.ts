import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor() { }

    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.body && req.body.inLineLoader) {
            delete req.body.inLineLoader;
        
        }
        return next.handle(req).pipe(
            finalize(() => )
        );
    }
}