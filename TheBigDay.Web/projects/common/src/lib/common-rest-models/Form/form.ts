import {ItemCategory} from "../item-category";
import {FormField} from "./form-field";

export interface Form {
    id: string;
    name: string;
    description: string;
    itemType: ItemType,
    itemCategory: ItemCategory,
    formLevel: FormLevel;
    isDeleted: boolean;

    //Nav
    fields?: FormField[];
    subForms?: Form[];
}

export enum FormLevel {
    STORE,
    ITEM
}
export enum ItemType {
    PRODUCT ,
    SERVICE,
}
