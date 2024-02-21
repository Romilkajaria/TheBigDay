import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@auth0/auth0-angular";
export class LogoutComponent {
    constructor(auth) {
        auth.logout();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LogoutComponent, deps: [{ token: i1.AuthService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: LogoutComponent, selector: "lib-logout", ngImport: i0, template: "\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LogoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-logout', template: "\n" }]
        }], ctorParameters: function () { return [{ type: i1.AuthService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbi9zcmMvbGliL2NvbXBvbmVudHMvYXV0aC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbi9zcmMvbGliL2NvbXBvbmVudHMvYXV0aC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVExQyxNQUFNLE9BQU8sZUFBZTtJQUV4QixZQUFZLElBQWlCO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDOytHQUpRLGVBQWU7bUdBQWYsZUFBZSxrRENSNUIsSUFDQTs7NEZET2EsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiQGF1dGgwL2F1dGgwLWFuZ3VsYXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxvZ291dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dvdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihhdXRoOiBBdXRoU2VydmljZSkge1xuICAgICAgICBhdXRoLmxvZ291dCgpO1xuICAgIH1cbn1cbiIsIlxuIl19