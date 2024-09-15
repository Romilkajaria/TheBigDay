import {Component} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {LoginSignupDialogComponent} from "./login-signup-dialog/login-signup-dialog.component";
import {defaultEvent, Event} from "../../../../../common/src/lib/common-rest-models/event";
import {Router} from "@angular/router";
import {
    LocalStorageService
} from "../../../../../common/src/lib/common-services/local-storage-service/local-storage.service";

@Component({
  selector: 'consumer-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
    providers: [DialogService],
})
export class LandingComponent {
    public event: Event = defaultEvent;
    public browsingAddress?: string;
    public static readonly eventKey = "event"

    constructor(private dialogService: DialogService,
                private router: Router,
                private localStorageService: LocalStorageService,) {
    }

    public async startEvent() {
        this.localStorageService.setItem(LandingComponent.eventKey, JSON.stringify(this.event));
        await this.router.navigate(["app/dashboard"]);
    }

    public async startBrowsing() {
        if(this.browsingAddress) {
            const tbdEvent = defaultEvent;
            tbdEvent.addressLine1 = this.browsingAddress!;
            tbdEvent.name = "new Event"
            this.localStorageService.setItem(LandingComponent.eventKey, JSON.stringify(tbdEvent));
            await this.router.navigate(["app/dashboard"]);
        }
    }
    public loginSignupClicked(header: string) {
        this.dialogService.open(LoginSignupDialogComponent, {header, width: '35%', height: '60%'})
    }

    public isEventButtonDisabled() {
        return this.event.name.length === 0 ||
            this.event.addressLine1.length === 0;
    }

}
