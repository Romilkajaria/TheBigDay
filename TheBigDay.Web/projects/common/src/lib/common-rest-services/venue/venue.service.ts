import {Injectable, Injector} from '@angular/core';
import {environment} from "../../environments/environment";
import {FormEntry} from "../../common-rest-models/form-entry";
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {Venue} from "../../common-rest-models/venue";

@Injectable({
  providedIn: 'root'
})
export class VenueService extends BaseCommonRestService {

    private readonly venueUrl = environment.apiUrl + "venue";
    constructor(injector: Injector) {
        super(injector);
    }

    public getVenues() {
        return this.get<Venue[]>(this.venueUrl);
    }

    public addVenue(venue: Venue) {
        return this.post<Venue>(this.venueUrl + '/add', venue);
    }

    public updateVenue(venue: Venue) {
        return this.put<Venue>(`${this.venueUrl}/${venue.id}`, venue);
    }

    public deleteVenue(id: string) {
        return this.delete<Venue>(`${this.venueUrl}/${id}`)
    }
}
