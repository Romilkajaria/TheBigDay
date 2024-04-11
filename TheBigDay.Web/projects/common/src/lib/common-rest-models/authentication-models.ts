export interface RegisterModel {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2?: string;
    suburb: string;
    state: string;
    country: string;
    postcode: string;
    dOB: Date ;
    phoneNumber: string;
    storeId: string;
    photoPath: string;
}

export interface LoginModel {
    email: string;
    password: string;
}
