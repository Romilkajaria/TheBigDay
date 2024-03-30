import {Component, Inject, OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {DOCUMENT} from "@angular/common";
import { AuthorizeService } from "projects/common/src/lib/components/auth/login/authorize.service";
import {Router} from "@angular/router";
import {catchError, interval, switchMap, timer} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    public isSignedIn: boolean = false;

    constructor(@Inject(DOCUMENT) private document: Document,
                private router: Router,
                private authService: AuthorizeService,
                private primengConfig: PrimeNGConfig) {
        this.primengConfig.ripple = true;
    }

    public ngOnInit(): void {
        interval(15000).pipe(
            switchMap(() => {
                return this.authService.ping()
            })).subscribe((isSignedIn) => {
                if(!isSignedIn) {
                    this.authService.signOut();
                }
        })
    }
}
