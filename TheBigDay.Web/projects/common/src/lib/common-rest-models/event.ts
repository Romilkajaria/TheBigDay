export interface TBDEvent {
    id?: string
    name: string;
    description: string;
    startDateTime: Date;
    endDateTime: Date;
    allDay:boolean;
    isPrivate: boolean;
    guestListFinalised: boolean;
    ticketLink?: string;
    addressLine1: string;
    addressLine2?: string;
    suburb: string;
    state: string;
    country: string;
    postcode: string;
    isDeleted: boolean;
}

export const defaultEvent: TBDEvent = {
    addressLine1: '',
    allDay: false,
    country: '',
    description: 'Add some description about the event here',
    endDateTime: new Date(),
    guestListFinalised: false,
    isDeleted: false,
    isPrivate: false,
    name: '',
    postcode: '',
    startDateTime: new Date(),
    state: '',
    suburb: ''

}
