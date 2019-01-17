import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable()

export class ErrorInterceptor implements HttpInterceptor {

    constructor(private _router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(req).pipe(
                catchError((err: HttpErrorResponse) => {

                    if(err.status === 403) {
                        this._router.navigate(['/home/forbidden/']);
                    }

                    return throwError(err);
                }
            )
        );
    }
}