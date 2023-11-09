import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public constructor(private router: Router) {
  }

  async navigateToDashboard() {
    await this.router.navigate(["/dashboard"])
  }
}
