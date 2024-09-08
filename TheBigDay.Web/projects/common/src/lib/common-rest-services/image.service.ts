import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from "../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    private apiUrl = environment.apiUrl + 'images'; // Replace with your .NET Core API URL

    constructor(private http: HttpClient) {
    }

    // Upload Image to the API
    uploadImage(file: File): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('file', file);

        return this.http.post(`${this.apiUrl}/upload`, formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(
            map((event: any) => {
                switch (event.type) {
                    case HttpEventType.UploadProgress:
                        const progress = Math.round(100 * event.loaded / event.total);
                        return {status: 'progress', message: progress};
                    case HttpEventType.Response:
                        return {status: 'completed', message: event.body};
                    default:
                        return {status: 'unhandled', message: `Unhandled event: ${event.type}`};
                }
            })
        );
    }

    // Download Image from the API
    downloadImage(fileName: string): Observable<Blob> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/octet-stream'
        });

        return this.http.get(`${this.apiUrl}/retrieve/${fileName}`, {
            headers,
            responseType: 'blob' // Make sure to get the response as a blob
        });
    }
}
