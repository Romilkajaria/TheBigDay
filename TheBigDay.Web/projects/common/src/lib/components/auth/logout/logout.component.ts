import { Component } from '@angular/core';
import {AuthService} from "../login/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'lib-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

    constructor(auth: AuthService, router: Router) {
        auth.logout().subscribe(() => router.navigate(['/auth']));
    }
}
