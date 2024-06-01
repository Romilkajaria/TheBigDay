import {Event} from "./event";

export interface EventCategory {
    id?: string;
    name: string;

    //
    events?: Event[];
}
