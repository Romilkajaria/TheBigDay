import {EventType} from "./TBDEvent";

export interface AvailabilityDateRange {
    id: string;
    startDate: Date;
    endDate: Date;
}

export enum VendorTypes {
    VENUE = 'Venue',
    CATERER = 'Caterer',
    EVENT_STYLIST = 'Event Stylist',
    EVENT_PLANNERS = 'Event Planner',
}

export interface PricingDetail {
    id?: string; // Assuming Guid in C# is mapped to string in TypeScript
    basePrice: number;
    minimumPrice: number;
    maximumPrice?: number;
    numOfGuestsToQualifyAsBulkBooking: number;
    securityDeposit: number;
    depositPreference: DepositPreferenceOptions;
    billingCountry?: string;
    // ReferenceId?: string; // Commented out as per the C# class
}

export interface BookingRequirements {
    id: string; // Assuming Guid in C# is mapped to string in TypeScript
    emailAddress: boolean;
    phoneNumber: boolean;
    paymentInformation: boolean;
    propertyRules: boolean;
    vendorDetails: boolean;
    vendorRules: boolean;
    bookingDetails2DaysPrior: boolean;
    isDisabled: boolean;
}

export interface Venue {
    id?: string;
    storeId?: string;

    //property details
    propertyType?: PropertyType;
    spaceType?: SpaceType;
    size?: number; // in square meters
    maxNumOfGuests?: number;
    listingAsCompany?: boolean;

    // event details
    eventRequirements: EventRequirements
    numOfGuestsToQualifyAsExtendedStay?: number;
    venueVisitsOptions?: number;
    numOfPeopleInVisit?: number;
    hoursPriorToVendorCheckin?: number;
    additionalPermissionsRequiredWhenCheckin?: boolean;
    restrictionsRelatedToSetup?: string;

    // location
    location?: string;
    locationLandmark?: string;

    // amenities
    amenities?: string;
    soundRestrictions?: boolean;

    // Photos
    whatIsAround?: string;

    // description & title
    title?: string;
    description?: string;

    //booking requirements
    bookingRequirements?: BookingRequirements;

    // calendar
    availabilityDateRanges?: AvailabilityDateRange[];
    daysNoticeNeededBeforeGuestArrives?: number;
    daysInAdvanceCanGuestsBook?: number; // 0 is same day onwards
    checkinTime?: Date;
    checkoutTime?: Date;

    // pricing
    pricingDetails: PricingDetail;
}

export interface EventRequirements {
    id?: string; // Assuming Guid in C# is mapped to string in TypeScript
    externalVendorsApproved: boolean;
    typesOfExternalVendors?: VendorTypes[];
    approvedEventTypes: EventType[];
}

export enum PropertyType {
    FLAT,
    BOUTIQUE_HOTEL,
    EXCLUSIVE,
    INSTITUTION,
    VILLA,
    RESTAURANT
}

export const PropertyTypeLabelMap: Record<PropertyType, string> = {
    [PropertyType.FLAT]: 'Flat',
    [PropertyType.BOUTIQUE_HOTEL]: 'Boutique Hotel',
    [PropertyType.EXCLUSIVE]: 'Exlusive',
    [PropertyType.INSTITUTION]: 'Institution',
    [PropertyType.VILLA]: 'Villa',
    [PropertyType.RESTAURANT]: 'Restaurant'
}

export enum DepositPreferenceOptions {
    PRE_BOOKING,
    HALF_NOW_HALF_LATER,
    QUARTER_NOW_THREE_QUARTER_LATER,
}

export const newVenue: Venue = {
    additionalPermissionsRequiredWhenCheckin: false,
    amenities: "",
    availabilityDateRanges: [],
    daysInAdvanceCanGuestsBook: 0,
    daysNoticeNeededBeforeGuestArrives: 0,
    hoursPriorToVendorCheckin: 0,
    location: "",
    locationLandmark: "",
    maxNumOfGuests: 0,
    numOfGuestsToQualifyAsExtendedStay: 0,
    numOfPeopleInVisit: 0,
    restrictionsRelatedToSetup: "",
    size: 0,
    whatIsAround: "",
    description: "",
    storeId: "",
    title: "",
    eventRequirements: {
        externalVendorsApproved: false,
        approvedEventTypes: [],
        typesOfExternalVendors: undefined
    },
    pricingDetails: {
        basePrice: 0,
        depositPreference: DepositPreferenceOptions.HALF_NOW_HALF_LATER,
        securityDeposit: 0,
        numOfGuestsToQualifyAsBulkBooking: 100,
        minimumPrice: 0,
    }
}

export enum SpaceType {
    ENTIRE_SPACE,
    PRIVATE_ROOM,
}
