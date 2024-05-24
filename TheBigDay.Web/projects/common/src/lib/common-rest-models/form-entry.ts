import {Store} from "./store";
import {FormField} from "./Form/form-field";
import {EventItem} from "./event";
import {Form} from "./Form/form";

export class FormEntry {
    id!: string;
    storeId!: string;
    isDeleted!: boolean;

    // custom form fields
    stringValue?: string;
    booleanValue?: boolean;
    longValue?: number;
    intValue?: number;
    linkValue?: string;

    // navigation
    form!: Form;
    store!: Store;
    formField!: FormField;
    eventItems?: EventItem[];
}
