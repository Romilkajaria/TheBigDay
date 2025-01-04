import {Component, EventEmitter, Output} from '@angular/core';
import {AutoCompleteModule} from "primeng/autocomplete";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {defaultEvent} from "../../common-rest-models/TBDEvent";
import {LocalStorageService} from "../../common-services/local-storage-service/local-storage.service";
import {LandingComponent} from "../../../../../consumer/src/app/pages/landing/landing.component";
import {Router} from "@angular/router";
import {Button} from "primeng/button";
import {DynamicDialogRef} from "primeng/dynamicdialog";

export const States: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
];


@Component({
    selector: 'lib-select-state-dialog',
    standalone: true,
    imports: [
        AutoCompleteModule,
        FormsModule,
        DropdownModule,
        Button
    ],
    templateUrl: './select-state-dialog.component.html',
    styleUrl: './select-state-dialog.component.css'
})

export class SelectStateDialogComponent {
    States = States;
    selectedState: string | undefined;
    @Output() stateOutput = new EventEmitter<string>();

    constructor(private localStorageService: LocalStorageService,
                private router: Router,
                private ref: DynamicDialogRef) {
    }

    onStateChanged($event: string) {
        this.selectedState = $event;
        this.stateOutput.emit(this.selectedState);
    }

    public async startBrowsing() {
        if (this.selectedState) {
            const tbdEvent = defaultEvent;
            tbdEvent.state = this.selectedState!;
            tbdEvent.name = "new Event"
            this.localStorageService.setItem(LandingComponent.eventKey, JSON.stringify(tbdEvent));
            this.ref.close();
            await this.router.navigate(["app/dashboard"]);
        }
    }
}
