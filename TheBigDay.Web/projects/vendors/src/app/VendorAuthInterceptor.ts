import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {AuthorizeService} from "../../../common/src/lib/components/auth/login/authorize.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const token = AuthInterceptor.getCookie('TBDtoken');
        //
        // if (token) {
        //     request = request.clone({
        //         withCredentials: true // Ensure cookies are sent with the request
        //     });
        // }

        return next.handle(request).pipe(tap({
            error: (event: HttpEvent<any>) => {
                if (event instanceof HttpErrorResponse) {
                    if (event.status !== 401 || (event.url && event.url.indexOf("manage/info") >= 0)) {
                        return;
                    }
                    this.router.navigate(['auth']);
                }
            }
        }));
    }

    private static getCookie(name: string): string | undefined {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        return parts && parts.length === 2 ?
            parts.pop()?.split(';').shift() : undefined;

    }
}
