import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor() {
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
