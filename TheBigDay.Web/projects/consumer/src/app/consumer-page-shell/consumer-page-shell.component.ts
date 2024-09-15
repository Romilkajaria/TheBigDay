import {Component, OnInit} from '@angular/core';
import {
    LocalStorageService
} from "../../../../common/src/lib/common-services/local-storage-service/local-storage.service";
import {Router} from "@angular/router";
import {lastValueFrom} from "rxjs";
import {LandingComponent} from "../pages/landing/landing.component";
import {User} from "../../../../common/src/lib/common-rest-models/user";

@Component({
  selector: 'app-consumer-page-shell',
  templateUrl: './consumer-page-shell.component.html',
  styleUrls: ['./consumer-page-shell.component.scss']
})
export class ConsumerPageShellComponent implements OnInit {

    public readonly consumerMenu = consumerMenu;
    events: Event[] = []
    selectedEvent?: Event;
    user?: User | null;

    constructor(private localStorageService: LocalStorageService,
                private router: Router,) {

    }

    public async ngOnInit() {
        const cachedEvent = this.localStorageService.getItem(LandingComponent.eventKey);
        if(cachedEvent) {
            this.selectedEvent = JSON.parse(cachedEvent) as Event;
        }

        if (!this.selectedEvent) {
            await this.router.navigate([""])
        } else {
            this.events = [this.selectedEvent];
        }
    }
}

export const consumerMenu = [
    {
        label: 'Me',
        items: [
            { label: 'My Celebrations', routerLink: ['/pages/events'] },
            { label: 'My Registry', routerLink: ['/pages/registry'] },
            { label: 'Wallet', routerLink: ['/pages/wallet'] },
        ]
    },
    {
        label: '',
        items: [
            { label: 'Modes', routerLink: ['/pages/offers'] },
            { label: 'Refer & Earn', routerLink: ['/pages/refer'] },
            { label: 'Shake it off', routerLink: ['/pages/shake'] },
            { label: 'Offers', routerLink: ['/pages/offers'] },
            { label: 'Rewards', routerLink: ['/pages/rewards'] },
            { label: 'FAQs', routerLink: ['/pages/faqs'] },
            { label: 'Privacy Policy', routerLink: ['/pages/privacy-policy'] },
            { label: 'Sign out', routerLink: ['/logout'] },


        ]
    },
];
