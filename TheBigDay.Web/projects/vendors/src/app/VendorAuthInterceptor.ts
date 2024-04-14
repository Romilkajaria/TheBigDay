import {Injectable} from "@angular/core";
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest
} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');

        if (token) {
            request = request.clone({
               headers: new HttpHeaders({
                   'Content-Type': 'application/json',
                   Authorization: `Bearer ${token}`
               })
            });
        }

        return next.handle(request).pipe(tap({
            error: (event: HttpEvent<any>) => {
                if (event instanceof HttpErrorResponse) {
                    if (event.status !== 401 || (event.url && event.url.indexOf("ping") >= 0)) {
                        return;
                    }
                    this.router.navigate(['/auth']);
                }
            }
        }));
    }
}
