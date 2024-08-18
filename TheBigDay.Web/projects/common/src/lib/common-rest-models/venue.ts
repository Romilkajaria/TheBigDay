import { EventType } from "./event";

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
    title: string;
    description: string;
    propertyType: PropertyType;
    SpaceType: SpaceType;
    Size: number; // in square meters
    MaxNumOfGuests: number;
    ListingAsCompany: boolean;
    Location: string;
    LocationLandmark: string;
    Amenities: string;
    SoundRestrictions: boolean;
    WhatIsAround: string ;
    DaysNoticeNeededBeforeGuestArrives: number;
    DaysInAdvanceCanGuestsBook: number; // 0 is same day onwards
    CheckinTime: Date;
    CheckoutTime: Date;
    NumOfGuestsToQualifyAsExtendedStay: number;
    VenueVisitsOptions: VenueVisitsOptions;
    NumOfPeopleInVisit: number;
    HoursPriorToVendorCheckin: number;
    AdditionalPermissionsRequiredWhenCheckin: boolean;
    RestrictionsRelatedToSetup: string;
    BookingRequirements: BookingRequirements;
    PricingDetails: PricingDetail;
    AvailabilityDateRanges: AvailabilityDateRange[];
}

export interface EventRequirements {
    id: string; // Assuming Guid in C# is mapped to string in TypeScript
    externalVendorsApproved: boolean;
    typesOfExternalVendors?: string;
    approvedEventTypes: EventType[];
}

enum PropertyType
{
    FLAT,
    BOUTIQUE_HOTEL,
    EXCLUSIVE,
    INSITTUTION,
    VILLA,
    RESTAURANT
}

enum SpaceType
{
    ENTIRE_SPACE,
    PRIVATE_ROOM,
}

enum VenueVisitsOptions
{
    ONE,
    TWO,
    THREE_OR_MORE,
}

export enum DepositPreferenceOptions {
    PRE_BOOKING,
    HALF_NOW_HALF_LATER,
    QUARTER_NOW_THREE_QUARTER_LATER,
}
