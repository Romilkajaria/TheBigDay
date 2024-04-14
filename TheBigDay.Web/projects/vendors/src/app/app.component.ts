import {Component, Inject, OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {DOCUMENT} from "@angular/common";
import { AuthorizeService } from "projects/common/src/lib/components/auth/login/authorize.service";
import {Router} from "@angular/router";
import {catchError, interval, map, switchMap, timer} from "rxjs";

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
        // TODO implement this later
        // interval(15000).pipe(
        //     switchMap(() => this.authService.user$),
        // ).subscribe((user) => {
        //     if(user) {
        //         this.authService.ping().subscribe();
        //     }
        // })

        // this.authService.initialise().subscribe(() => {
        //     this.router.navigate([''])
        // });
    }
}
