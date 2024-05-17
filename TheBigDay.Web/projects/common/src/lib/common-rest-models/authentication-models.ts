export interface RegisterStoreModel {
    // might later add store details back in
    user: RegisterCustomer
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
    mobile?: string;
    email?: string;
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
