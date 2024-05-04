import {Vendor} from "./vendor";

export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
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
    store: Vendor | undefined;

//Dependacies
    eventCustomers: any[];
}
