import {FormEntry} from "./form-entry";
import {User} from "./user";

export interface TBDEvent {
    id?: string
    name: string;
    description: string;
    startDateTime: Date;
    endDateTime: Date;
    isPrivate: boolean;
    guestListFinalised: boolean;
    ticketLink?: string;
    addressLine1: string;
    addressLine2?: string;
    suburb: string;
    state: string;
    country: string;
    postcode: string;
    isDeleted: boolean;
    eventType: EventType

    // navigation
    eventItems?: EventItem[];
    eventCustomers?: EventCustomer[];
}

export interface EventType {
    id: string;
    name: string;
}

export interface EventCustomer {
    id: string;
    customerId: string;
    eventId: string;
    isAdmin: boolean;
    isCreator: boolean;

    // navigation
    customer: User;
    event: TBDEvent;
}

export interface EventItem {
    id: string;
    eventId: string;
    formEntryId: string;
    isFinalisedByCustomer: boolean;
    isFinalisedByStore: boolean;
    finalPriceByStore: number;

    // navigation
    event: TBDEvent;
    formEntry: FormEntry;
}

export const defaultEvent: TBDEvent = {
    addressLine1: "",
    country: "",
    description: "",
    endDateTime: new Date(),
    eventCustomers: [],
    eventItems: [],
    eventType: {
        id: '',
        name: ''
    },
    guestListFinalised: false,
    isDeleted: false,
    isPrivate: false,
    name: "",
    postcode: "",
    startDateTime: new Date(),
    state: "",
    suburb: "",
}
