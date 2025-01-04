import {Injectable, Injector} from '@angular/core';
import {environment} from "../../environments/environment";
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {Venue} from "../../common-rest-models/venue";
import {HttpParams} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class VenueService extends BaseCommonRestService {

    private readonly venueUrl = environment.apiUrl + "venue";

    constructor(injector: Injector) {
        super(injector);
    }

    public getVenues() {
        return this.http.get<Venue[]>(this.venueUrl);
    }

    public searchNearbyVenues(eventState: string) {
        const params = new HttpParams()
            .set('eventState', eventState)
        return this.http.get<Venue[]>(this.venueUrl + '/nearby', {params})
    }

    public addVenue(venue: Venue) {
        return this.http.post<Venue>(this.venueUrl + '/add', venue);
    }

    public updateVenue(venue: Venue) {
        return this.http.put<Venue>(`${this.venueUrl}/${venue.id}`, venue);
    }

    public deleteVenue(id: string) {
        return this.http.delete<Venue>(`${this.venueUrl}/${id}`)
    }

    public addVenuePhoto(data: string, venueId: string) {
        // return photo link
        return this.http.post<string>(`${this.venueUrl}/${venueId}/photo`, data);
    }

    public getVenuePhotos(venueId: string) {
        // returns links for all photos
        return this.http.get<Venue>(`${this.venueUrl}/${venueId}/photos`);
    }
}
