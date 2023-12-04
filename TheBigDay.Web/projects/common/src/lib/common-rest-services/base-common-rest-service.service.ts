import {Injectable, Injector} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseCommonRestService {

  private http: HttpClient;
  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  public get<T>(path: string) {
    return this.http.get<T>(path);
  }

  public post<T>(path: string, payload: T) {
    return this.http.post<T>(path, payload);
  }

  public put<T>(path: string, payload: T) {
    return this.http.put<T>(path, payload)
  }
}
