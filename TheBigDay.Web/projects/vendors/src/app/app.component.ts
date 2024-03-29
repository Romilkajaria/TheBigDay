import {Component, Inject, OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {DOCUMENT} from "@angular/common";
import { AuthorizeService } from "projects/common/src/lib/components/auth/login/authorize.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    public isSignedIn: boolean = false;

    constructor(@Inject(DOCUMENT) private document: Document,
                private authService: AuthorizeService,
                private primengConfig: PrimeNGConfig) {
        this.primengConfig.ripple = true;
    }

    public ngOnInit(): void {
        this.authService.onStateChanged().forEach((state: any) => {
            this.authService.isSignedIn().forEach((signedIn: boolean) => this.isSignedIn = signedIn);
        });
    }
}
