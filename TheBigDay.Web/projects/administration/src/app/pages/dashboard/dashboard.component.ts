import { Component } from '@angular/core';
import {Message} from "primeng/api";

@Component({
  selector: 'administration-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    messages: Message = {
        severity: 'warn',
        data: 'This is the admin environment. Please be careful when changing anything here'
    };

}
