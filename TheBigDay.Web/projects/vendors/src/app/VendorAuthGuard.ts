import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import { AuthorizeService } from "projects/common/src/lib/components/auth/login/authorize.service";
import {catchError, map, Observable, switchMap} from "rxjs";

@Injectable(
  { providedIn: "root" }
)
export class VendorAuthGuard implements CanActivate {

    constructor(private authService: AuthorizeService, private router: Router) { }

    canActivate() {
        return this.authService.initialise().pipe(
            switchMap(() => this.isSignedIn()),
            catchError(() => this.isSignedIn())
            );
    }

    isSignedIn(): Observable<boolean> {
        return this.authService.onStateChanged().pipe(
            map((isSignedIn) => {
                if (!isSignedIn) {
                    // redirect to login page
                    this.router.navigate(['/auth']);
                    return false;
                }
                return true;
            }));
    }
}
