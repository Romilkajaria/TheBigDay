import {Component} from '@angular/core';
import {LayoutService} from "./service/app.layout.service";
import {APP_NAME} from "../common.service";

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
    protected readonly APP_NAME = APP_NAME;

    constructor(public layoutService: LayoutService) {
    }
}
