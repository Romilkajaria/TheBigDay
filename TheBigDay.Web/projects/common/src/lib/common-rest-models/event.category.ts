import {TBDEvent} from "./TBDEvent";

export interface EventCategory {
    id?: string;
    name: string;
    description?: string;

    //
    events?: TBDEvent[];
}
