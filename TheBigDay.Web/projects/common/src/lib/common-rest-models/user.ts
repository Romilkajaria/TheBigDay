import {Store} from "./store";

export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface User {
    id: string
    photoPath: string;
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2: string;
    suburb: string;
    state: string;
    country: string;
    postcode: string;
    mobile: string;
    email: string;
    dob: Date;
    isDeleted: boolean;
    storeId?: string;
    store: Store | undefined;
    hasCompletedProfile: boolean;

//Dependacies
    eventCustomers: any[];
}
