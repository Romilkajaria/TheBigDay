export interface Vendor {
    id: string;
    name: string;
    description: string;
    operatingRadius: number;
    addressLine1: string;
    addressLine2: string;
    suburb: string;
    state: string;
    country: string;
    postcode: string;
    contactNum: string;
    afterHoursMobile: string;
    email: string;
    photoPath?: string;
    isDeleted: boolean;
}
