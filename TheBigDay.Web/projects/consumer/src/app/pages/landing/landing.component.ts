import {Component, signal} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {LoginSignupDialogComponent} from "./login-signup-dialog/login-signup-dialog.component";
import {defaultEvent, TBDEvent} from "../../../../../common/src/lib/common-rest-models/event";
import {Router} from "@angular/router";
import {
    LocalStorageService
} from "../../../../../common/src/lib/common-services/local-storage-service/local-storage.service";
import {AuthService} from "@auth0/auth0-angular";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'consumer-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
    providers: [DialogService],
})
export class LandingComponent {
    public event: TBDEvent = defaultEvent;
    public browsingAddress?: string;

    constructor(private dialogService: DialogService,
                private router: Router,
                private localStorageService: LocalStorageService,
                public auth: AuthService) {
    this.auth.isAuthenticated$.subscribe((a) => {
        if(a) {
            this.router.navigate(['app/dashboard'])
        }
    });
    }

    public async startEvent() {
        this.localStorageService.setItem<TBDEvent>("event", this.event);
        await this.router.navigate(["app/dashboard"]);
    }

    public async startBrowsing() {
        if(this.browsingAddress) {
            const tbdEvent = defaultEvent;
            tbdEvent.addressLine1 = this.browsingAddress!;
            tbdEvent.name = "new Event"
            this.localStorageService.setItem<TBDEvent>("event", tbdEvent);
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
