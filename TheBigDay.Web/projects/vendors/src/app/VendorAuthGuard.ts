import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { AuthService } from "projects/common/src/lib/components/auth/login/auth.service";
import {Observable} from "rxjs";

@Injectable(
  { providedIn: "root" }
)
export class VendorAuthGuard implements CanActivate {

  constructor(protected router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if(!this.authService.isSignedIn) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
}
