import {Component} from '@angular/core';
import {EventServices} from "../../../../common/src/lib/common-rest-models/service";

class CommonEventService {
}

@Component({
  selector: 'app-consumer-page-shell',
  templateUrl: './consumer-page-shell.component.html',
  styleUrls: ['./consumer-page-shell.component.scss']
})
export class ConsumerPageShellComponent {

    protected readonly consumerMenu = consumerMenu;
    countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];
    selectedCountry: any;

    constructor(private eventService: CommonEventService) {
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

        ]
    },
];
