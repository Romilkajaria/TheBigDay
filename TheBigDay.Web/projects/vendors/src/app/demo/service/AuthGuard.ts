import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable(
  { providedIn: "root" }
)
export class AuthGuard implements CanActivate {
  public isActiveUser = false;

  constructor(protected router: Router)
  {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if(!this.isActiveUser) {
      this.router.navigate(['/landing']);
      this.isActiveUser = true;
      return false;
    }
    return true;
  }
}
