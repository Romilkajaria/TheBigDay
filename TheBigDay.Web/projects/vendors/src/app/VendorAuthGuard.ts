import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { AuthorizeService } from "projects/common/src/lib/components/auth/login/authorize.service";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {CommonVendorService} from "../../../common/src/lib/common-rest-services/vendors/common-vendor-service.service";
import {error} from "ng-packagr/lib/utils/log";

@Injectable(
  { providedIn: "root" }
)
export class VendorAuthGuard implements CanActivate {

    constructor(private authService: AuthorizeService, private router: Router) { }

    canActivate() {
        return this.isSignedIn();
    }

    isSignedIn(): Observable<boolean> {
        return this.authService.isSignedIn().pipe(
            map((isSignedIn) => {
                if (!isSignedIn) {
                    // redirect to signin page
                    this.router.navigate(['auth']);
                    return false;
                }
                return true;
            }));
    }
}
