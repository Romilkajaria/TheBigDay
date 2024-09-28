import {Component} from '@angular/core';
import {APP_NAME} from "../../common.service";

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
})
export class NotfoundComponent {
    protected readonly APP_NAME = APP_NAME;
}
