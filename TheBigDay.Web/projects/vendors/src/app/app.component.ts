import {Component, Inject, OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {AuthService} from "@auth0/auth0-angular";
import {DOCUMENT} from "@angular/common";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    isAuthenticated: boolean;

    constructor(@Inject(DOCUMENT) private document: Document,
                private authService: AuthService,
                private primengConfig: PrimeNGConfig) {
        this.isAuthenticated = false;
        this.primengConfig.ripple = true;
    }

    public ngOnInit(): void {
        this.authService.isAuthenticated$.subscribe((success: boolean) => {
            this.isAuthenticated = success;
        });
    }
}
