import { Component } from '@angular/core';
import {AuthorizeService} from "../login/authorize.service";
import {Router} from "@angular/router";

@Component({
  selector: 'lib-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

    constructor(auth: AuthorizeService, router: Router) {
        auth.signOut();
    }
}
