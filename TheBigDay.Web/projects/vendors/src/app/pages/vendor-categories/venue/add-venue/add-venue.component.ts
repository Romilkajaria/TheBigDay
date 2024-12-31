import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, MenuItem, Message, MessageService} from "primeng/api";
import {AuthorizeService} from "../../../../../../../common/src/lib/components/auth/login/authorize.service";
import {
    newVenue,
    PropertyType,
    PropertyTypeLabelMap,
    SpaceType,
    VendorTypes,
    Venue
} from "../../../../../../../common/src/lib/common-rest-models/venue";
import {VenueService} from "../../../../../../../common/src/lib/common-rest-services/venue/venue.service";
import {getToastMessage, ToastMessageType} from "../../../../../../../common/src/lib/helpers/toastMessages";
import {
    RadioButtonConfig
} from "../../../../../../../common/src/lib/components/uikit/radiobuttons/radiobuttons.component";
import {EventCategoryService} from "../../../../../../../common/src/lib/common-rest-services/event-category.service";

import {CheckboxConfig} from 'projects/common/src/lib/components/uikit/checkbox/checkbox.component';
import {EventCategory} from "../../../../../../../common/src/lib/common-rest-models/event.category";
import {APP_NAME} from "../../../../../../../common/src/lib/common.service";
import {IDropdownItem} from "../../../../../../../common/src/lib/components/uikit/dropdown/dropdown.component";


const steps: MenuItem[] = [{
    label: 'Property Details',
}, {
    label: 'Event details'
}, {
    label: 'Location'
}, {
    label: 'Amenities'
}, {
    label: 'Photos'
}, {
    label: 'Description & title'
}, {
    label: 'Booking settings'
}, {
    label: 'Calendar & availability'
}, {
    label: 'Pricing & security'
}, {
    label: 'Review'
}]

@Component({
    selector: 'app-add-venue',
    templateUrl: './add-venue.component.html',
    styleUrls: ['./add-venue.component.scss'],
})
export class AddVenueComponent implements OnInit {
    @Output() onClose = new EventEmitter<void>();
    venue: Venue = newVenue;
    loading = false;
    steps = steps;
    stepIndex = 0;
    address!: string;
    date?: Date;
    filteredAddresses!: string[];
    autocompleteService!: google.maps.places.AutocompleteService;
    geocoder!: google.maps.Geocoder;
    center: google.maps.LatLngLiteral = {lat: 19.054135472854046, lng: 72.85170271349183}; // Default location (Mumbai)
    zoom = 12;
    imagePreview: string = 'https://via.placeholder.com/150';

    readonly maxSteps = steps.length
    eventTypes: CheckboxConfig<EventCategory>[] = [];
    propertyTypeOptions: IDropdownItem<PropertyType>[] = [
        {name: PropertyTypeLabelMap[PropertyType.FLAT], value: PropertyType.FLAT},
        {name: PropertyTypeLabelMap[PropertyType.VILLA], value: PropertyType.VILLA},
        {name: PropertyTypeLabelMap[PropertyType.RESTAURANT], value: PropertyType.RESTAURANT},
        {name: PropertyTypeLabelMap[PropertyType.BOUTIQUE_HOTEL], value: PropertyType.BOUTIQUE_HOTEL},
        {name: PropertyTypeLabelMap[PropertyType.INSTITUTION], value: PropertyType.INSTITUTION},
        {name: PropertyTypeLabelMap[PropertyType.EXCLUSIVE], value: PropertyType.EXCLUSIVE},
    ]
    guestHaveOptions: RadioButtonConfig<SpaceType>[] = [{
        title: "Entire Space",
        description: "Guests have the whole place to themselves. This usually includes a bedroom, a bathroom, and a kitchen.",
        value: SpaceType.ENTIRE_SPACE
    }, {
        title: "Private Room",
        description: "Guests have their own private room. Other areas could be shared.",
        value: SpaceType.PRIVATE_ROOM
    }
    ];
    // setupDedicatedOptions: RadioButtonConfig<any>[];
    listingPartOfCompanyOptions: RadioButtonConfig<boolean>[] = [{
        title: "I'm hosting as an individual or sole owner",
        value: false,
    }, {
        title: "I'm hosting as an registered business",
        value: true,
    }];
    defaultYesNoOptions: RadioButtonConfig<boolean>[] = [{
        title: "Yes",
        value: true,
    }, {
        title: "No",
        value: false,
    }];

    priorCheckinTimeOptions: RadioButtonConfig<number>[] = [{
        title: "12 Hours prior",
        value: 12,
    }, {
        title: "24 hours prior",
        value: 24,
    }];

    visitsAllowedOptions: RadioButtonConfig<number>[] = [{
        title: "One",
        value: 1,
    }, {
        title: "Two",
        value: 2,
    }, {
        title: "Three or more",
        value: 3,
    }];

    restrictionRelatedToSetupOptions: CheckboxConfig<string>[] = [{
        title: "Guests or their vendors should not use any form of adhesives on the walls",
        value: "Guests or their vendors should not use any form of adhesives on the walls",
    }, {
        title: "Guests or their vendors cannot bring combustible / hazardous items - gas cylinders, generators, etc",
        value: "Guests or their vendors cannot bring combustible / hazardous items - gas cylinders, generators, etc",
    }, {
        title: "Drug abuse is an offense - any type of drugs are strictly prohibited in the premises.",
        value: "Drug abuse is an offense - any type of drugs are strictly prohibited in the premises.",
    }];

    vendorTypeOptions: CheckboxConfig<VendorTypes>[] = [{
        title: VendorTypes.VENUE,
        value: VendorTypes.VENUE,
    }, {
        title: VendorTypes.CATERER,
        value: VendorTypes.CATERER,
    }, {
        title: VendorTypes.EVENT_STYLIST,
        value: VendorTypes.EVENT_STYLIST,
    }, {
        title: VendorTypes.EVENT_PLANNERS,
        value: VendorTypes.EVENT_PLANNERS
    }];
    options: google.maps.MapOptions = {
        gestureHandling: 'none',
        disableDefaultUI: true,
    };
    amenitiesOptions: CheckboxConfig<string>[] = [{
        title: "Audio Visual Equipment",
        value: "Audio Visual Equipment"
    }, {
        title: "General Services",
        value: "General Services"
    }, {
        title: "Internet Services",
        value: "Internet Services"
    }, {
        title: "Electricity Arrangements (generator)",
        value: "Electricity Arrangements (generator)"
    }, {
        title: "Wedding Planners",
        value: "Wedding Planners"
    }, {
        title: "Corporate Event Planners",
        value: "Corporate Event Planners"
    }, {
        title: "Decorators",
        value: "Decorators"
    }, {
        title: "Catering Services",
        value: "Catering Services"
    }, {
        title: "Bar Services",
        value: "Bar Services"
    }, {
        title: "Artist Management Services",
        value: "Artist Management Services"
    }, {
        title: "Changing Rooms",
        value: "Changing Rooms"
    }, {
        title: "Rooms",
        value: "Rooms"
    }];
    guestsMustProvideOptions: CheckboxConfig<string>[] = [{
        title: 'Email Address',
        disabled: true,
        value: "Email Address",
        selected: true,
    }, {
        title: 'Valid Phone Number',
        disabled: true,
        value: "Valid Phone Number",
        selected: true,
    }, {
        title: 'Payment Information',
        disabled: true,
        value: "Payment Information",
        selected: true,
    },]

    bookingPropertyEachGuestMustOptions: CheckboxConfig<string>[] = [{
        title: 'Agree with property rules',
        disabled: true,
        value: 'Agree with property rules',
        selected: true,
    }, {
        title: 'Agree with payment terms',
        disabled: true,
        value: 'Agree with payment terms',
        selected: true,
    }, {
        title: 'Submit vendor details',
        disabled: true,
        value: 'Submit vendor details',
        selected: true,
    }, {
        title: 'Agree with vendor rules',
        disabled: true,
        value: 'Agree with vendor rules',
        selected: true,
    }, {
        title: `Confirm visit related details 2 days prior to ${APP_NAME}`,
        disabled: true,
        value: 'Confirm visit related details 2 days prior to ${APP_NAME}',
        selected: true,
    }]
    bookingAdditionalRequirements: CheckboxConfig<string>[] = [{
        title: 'Submit Government-issued ID',
        value: 'Submit Government-issued ID'
    }, {
        title: 'Recommended by other hosts and have no negative reviews',
        value: 'Recommended by other hosts and have no negative reviews'
    }, {
        title: 'Submit required licenses in case of playing music',
        value: 'Submit required licenses in case of playing music'
    }]
    venueRestrictionsRelatedToSetup: string[] | undefined;
    protected readonly APP_NAME = APP_NAME;

    constructor(private dialogConfig: DynamicDialogConfig<Venue>,
                private venueService: VenueService,
                private ref: DynamicDialogRef,
                private messageService: MessageService,
                private confirmationService: ConfirmationService,
                public auth: AuthorizeService,
                public eventCategoryService: EventCategoryService,
    ) {
        if (dialogConfig && dialogConfig.data) {
            this.venue = dialogConfig.data;
        }
    }

    triggerFileInput() {
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        fileInput.click();
    }

    onFileSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e: any) => {
                this.imagePreview = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    }

    public ngOnInit(): void {
        if (this.venue && this.venue.storeId === "" && this.auth.current && this.auth.current.storeId) {
            this.venue.storeId = this.auth.current.storeId;
        }
        // Initialize the Google Places AutocompleteService and Geocoder
        this.autocompleteService = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();

        this.eventCategoryService.getEventCategories().subscribe((data) => {
            this.eventTypes = data.map((d) => {
                return {
                    title: d.name,
                    value: d,
                    description: d.description
                } as CheckboxConfig<EventCategory>
            })
        })
    }

    searchAddresses(event: any) {
        const query = event.query;

        if (query.length > 2) { // Minimum characters for suggestions
            this.autocompleteService.getPlacePredictions(
                {input: query, types: ['address'], componentRestrictions: {country: 'au'}},
                (predictions, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
                        this.filteredAddresses = predictions.map(prediction => prediction.description);
                    }
                }
            );
        }
    }

    onAddressSelect(address: any) {
        this.venue.location = address;
        // Geocode the selected address to get its latitude and longitude
        this.geocoder.geocode({address: address}, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK && results && results[0].geometry) {
                const location = results[0].geometry.location;

                // Set the center of the map to the selected location
                this.center = {
                    lat: location.lat(),
                    lng: location.lng(),
                };
                this.zoom = 15; // Zoom in on the selected address
            }
        });
    }

    save() {
        this.loading = true;
        if (!this.venue) return;
        if (this.venue.id) {
            this.venueService.updateVenue(this.venue).subscribe({
                next: () => {
                    this.confirmation("Venue updated");
                },
                error: (er) => {
                    this.confirmation("Failed to update venue", er.message);
                }
            });
        } else {
            this.venueService.addVenue(this.venue).subscribe({
                next: () => {
                    this.confirmation("Venue added");
                },
                error: (er: Error) => {
                    this.confirmation("Failed to add venue", er.message);
                },
            })
        }
    }

    confirmation(toastMessage: string, errorMessage?: string) {
        this.loading = false;
        if (errorMessage) {
            this.messageService.add(getToastMessage(ToastMessageType.ERROR, toastMessage + errorMessage));
        } else {
            this.close(getToastMessage(ToastMessageType.SUCCESS, toastMessage));
        }
    }

    close(toastMessage?: Message) {
        this.ref.close(toastMessage);
    }

    delete() {
        this.loading = true;
        if (this.venue.id)
            this.venueService.deleteVenue(this.venue.id).subscribe({
                next: () => {
                    this.confirmation("Venue deleted");
                },
                error: (er: Error) => {
                    this.confirmation("failed to delete venue", er.message);
                },
            })
    }

    deleteConfirmation() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this venue?',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: "pi pi-times",
            rejectIcon: "none",
            acceptLabel: 'Delete',
            rejectLabel: 'Cancel',
            accept: () => this.delete(),
        })
    }

    next() {
        this.venue.id
            ? this.venueService.updateVenue(this.venue).subscribe(() => this.nextFormStep())
            : this.venueService.addVenue(this.venue!).subscribe(() => this.nextFormStep());
    }

    previous() {
        this.stepIndex = this.stepIndex - 1;
        this.dialogConfig.header = this.steps[this.stepIndex - 1].label;
    }

    nextFormStep() {
        this.stepIndex = this.stepIndex + 1;
        this.dialogConfig.header = this.steps[this.stepIndex - 1].label;
    }
}
