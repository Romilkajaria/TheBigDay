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
    afterHoursContactNum: string;
    email: string;
    photoPath?: string;
    isDeleted: boolean;
    hasCompletedStoreSetup: boolean;
    storeType?: StoreType;
    items: FormEntry[];
    storeItemCategories: StoreItemCategory[];
    //store payment preference
    depositPercentage?: number;
    // if 0, then payment on the day. TODO: ask Zeal how this works? should thee payment be done before or after the event.
    fullPaymentPrecedingEventDays?: number;
}

export interface StoreItemCategory {
    id?: string,
    storeId: string,
    itemCategoryId: string,

    //nav
    itemCategory?: ItemCategory
    store?: Store
}


export enum StoreType {
    INDIVIDUAL,
    BUSINESS,
}
