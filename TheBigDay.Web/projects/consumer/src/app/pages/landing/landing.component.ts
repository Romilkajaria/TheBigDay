import {Component} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {LoginSignupDialogComponent} from "./login-signup-dialog/login-signup-dialog.component";
import {defaultEvent, TBDEvent} from "../../../../../common/src/lib/common-rest-models/event";

@Component({
  selector: 'consumer-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
    providers: [DialogService],
})
export class LandingComponent {
    event: TBDEvent = defaultEvent;

    constructor(private dialogService: DialogService) {
    }
    public loginSignupClicked(header: string) {
        this.dialogService.open(LoginSignupDialogComponent, {header, width: '35%', height: '60%'})
    }

}
