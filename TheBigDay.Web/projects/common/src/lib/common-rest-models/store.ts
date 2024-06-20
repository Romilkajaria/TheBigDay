import {FormEntry} from "./form-entry";
import {ItemCategory} from "./item-category";

export interface Store {
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
    hasCompletedStoreSetup: boolean;
    storeType?: StoreType;
    items: FormEntry[];
    itemCategories: ItemCategory[];
}

export enum StoreType {
    INDIVIDUAL,
    BUSINESS,
}
