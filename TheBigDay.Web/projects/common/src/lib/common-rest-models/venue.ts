import {EventType} from "./event";

export interface AvailabilityDateRange {
    id: string;
    startDate: Date;
    endDate: Date;
}

export interface PricingDetail {
    id: string; // Assuming Guid in C# is mapped to string in TypeScript
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
    id: string;
    storeId: string;

    //property details
    propertyType: PropertyType;
    SpaceType: SpaceType;
    Size: number; // in square meters
    MaxNumOfGuests: number;
    ListingAsCompany: boolean;

    // event details
    eventRequirements: EventRequirements
    NumOfGuestsToQualifyAsExtendedStay: number;
    VenueVisitsOptions: VenueVisitsOptions;
    NumOfPeopleInVisit: number;
    HoursPriorToVendorCheckin: number;
    AdditionalPermissionsRequiredWhenCheckin: boolean;
    RestrictionsRelatedToSetup: string;

    // location
    Location: string;
    LocationLandmark: string;

    // amenities
    Amenities: string;
    SoundRestrictions: boolean;

    // Photos
    WhatIsAround: string;

    // description & title
    title: string;
    description: string;

    //booking requirements
    BookingRequirements: BookingRequirements;

    // calendar
    AvailabilityDateRanges: AvailabilityDateRange[];
    DaysNoticeNeededBeforeGuestArrives: number;
    DaysInAdvanceCanGuestsBook: number; // 0 is same day onwards
    CheckinTime: Date;
    CheckoutTime: Date;

    // pricing
    PricingDetails: PricingDetail;
}

export interface EventRequirements {
    id: string; // Assuming Guid in C# is mapped to string in TypeScript
    externalVendorsApproved: boolean;
    typesOfExternalVendors?: string;
    approvedEventTypes: EventType[];
}

export enum PropertyType {
    FLAT,
    BOUTIQUE_HOTEL,
    EXCLUSIVE,
    INSITTUTION,
    VILLA,
    RESTAURANT
}

export enum SpaceType {
    ENTIRE_SPACE,
    PRIVATE_ROOM,
}

enum VenueVisitsOptions {
    ONE,
    TWO,
    THREE_OR_MORE,
}

export enum DepositPreferenceOptions {
    PRE_BOOKING,
    HALF_NOW_HALF_LATER,
    QUARTER_NOW_THREE_QUARTER_LATER,
}
