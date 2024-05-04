export interface RegisterStoreModel {
    user: RegisterCustomer
    store: RegisterVendor
}

export interface LoginModel {
    email?: string;
    password?: string;
}

export interface RegisterCustomer {
    password?: string
    photoPath?: string; // not implemented yet
    firstName?: string;
    lastName?: string;
    addressLine1?: string;
    addressLine2?: string;
    suburb?: string;
    state?: string;
    country?: string;
    postcode?: string;
    mobile?: string;
    email?: string;
    storeId?: string;
    dob?: Date;
    isDeleted?: boolean;
    tcAccepted?: boolean;
    marketingAccepted?: boolean;
}

export interface RegisterVendor {
    name?: string;
    description?: string;
    operatingRadius?: number;
    addressLine1?: string;
    addressLine2?: string;
    suburb?: string;
    state?: string;
    country?: string;
    postcode?: string;
    contactNum?: string;
    afterHoursContactName?: string;
    afterHoursContactNum ?: string;
    email?: string;
    photoPath?: string;
    isDeleted?: boolean;
    isActive?: boolean;
}
