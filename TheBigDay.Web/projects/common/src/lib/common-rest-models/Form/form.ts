import {ItemCategory} from "../item-category";
import {FormField} from "./form-field";

export interface Form {
    id?: string;
    name: string;
    description: string;
    itemType?: ItemType,
    itemCategoryId?: string,
    formLevel: FormLevel;
    isDeleted: boolean;
    // parent form
    formId?: string

    //Nav
    itemCategory?: ItemCategory,
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


export const ItemTypeLabelRecord: Record<ItemType, string> = {
    [ItemType.PRODUCT]: 'Product',
    [ItemType.SERVICE]: 'Service',
}
export const FormLevelLabelRecord: Record<FormLevel, string> = {
    [FormLevel.STORE]: 'Store',
    [FormLevel.ITEM]: 'Item',
}
