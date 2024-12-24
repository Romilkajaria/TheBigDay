import {Component, OnInit} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {LoginSignupDialogComponent} from "./login-signup-dialog/login-signup-dialog.component";
import {defaultEvent, Event} from "../../../../../common/src/lib/common-rest-models/event";
import {Router} from "@angular/router";
import {
    LocalStorageService
} from "../../../../../common/src/lib/common-services/local-storage-service/local-storage.service";
import {
    SelectStateDialogComponent
} from "../../../../../common/src/lib/components/select-state-dialog/select-state-dialog.component";

@Component({
    selector: 'consumer-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    providers: [DialogService],
})
export class LandingComponent implements OnInit {
    public static readonly eventKey = "event"
    public event: Event = defaultEvent;
    public browsingAddress?: string;
    geocoder!: google.maps.Geocoder;
    filteredAddresses!: string[];
    autocompleteService!: google.maps.places.AutocompleteService;
    zoom = 12;
    center: google.maps.LatLngLiteral = {lat: 40.730610, lng: -73.935242}; // Default location (NYC)

    constructor(private dialogService: DialogService,
                private router: Router,
                private localStorageService: LocalStorageService) {
    }

    ngOnInit(): void {
        // Initialize the Google Places AutocompleteService and Geocoder
        this.autocompleteService = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
    }

    public async startEvent() {
        this.localStorageService.setItem(LandingComponent.eventKey, JSON.stringify(this.event));
        await this.router.navigate(["app/dashboard"]);
    }

    public async startBrowsing($event: any) {
        this.browsingAddress = $event;
        if (this.browsingAddress) {
            const tbdEvent = defaultEvent;
            tbdEvent.addressLine1 = this.browsingAddress!;
            tbdEvent.name = "new Event"
            this.localStorageService.setItem(LandingComponent.eventKey, JSON.stringify(tbdEvent));
            await this.router.navigate(["app/dashboard"]);
        }
    }

    public loginSignupClicked(header: string) {
        this.dialogService.open(LoginSignupDialogComponent, {header, width: '90%', height: '80%'})
    }

    public openSelectStateDialog() {
        const dialogRef = this.dialogService.open(SelectStateDialogComponent, {header: "Select State", height: '80%'});
    }

    searchAddresses(event: any) {
        const query = event.query;

        if (query.length > 3) { // Minimum characters for suggestions
            this.autocompleteService.getPlacePredictions(
                {input: query, types: ['address'], componentRestrictions: {country: 'in'}},
                (predictions, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
                        this.filteredAddresses = predictions.map(prediction => prediction.description);
                    }
                }
            );
        }
    }

    public isEventButtonDisabled() {
        return this.event.name.length === 0 ||
            this.event.addressLine1.length === 0;
    }

}
