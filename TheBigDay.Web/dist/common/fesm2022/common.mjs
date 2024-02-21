import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule as CommonModule$1 } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import * as i1 from '@auth0/auth0-angular';

class CommonService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class CommonComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CommonComponent, selector: "lib-common", ngImport: i0, template: `
    <p>
      common works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-common', template: `
    <p>
      common works!
    </p>
  ` }]
        }] });

class LogoutComponent {
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

class CommonModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CommonModule, declarations: [CommonComponent,
            LogoutComponent], imports: [CheckboxModule,
            ButtonModule,
            RippleModule,
            InputTextModule,
            CommonModule$1,
            FormsModule,
            MenuModule], exports: [CommonComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonModule, imports: [CheckboxModule,
            ButtonModule,
            RippleModule,
            InputTextModule,
            CommonModule$1,
            FormsModule,
            MenuModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CommonComponent,
                        LogoutComponent,
                    ],
                    imports: [
                        CheckboxModule,
                        ButtonModule,
                        RippleModule,
                        InputTextModule,
                        CommonModule$1,
                        FormsModule,
                        MenuModule
                    ],
                    exports: [
                        CommonComponent,
                    ]
                }]
        }] });

/*
 * Public API Surface of common
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CommonComponent, CommonModule, CommonService };
//# sourceMappingURL=common.mjs.map
