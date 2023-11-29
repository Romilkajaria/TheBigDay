import {Injectable, Injector} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseCommonRestService<T> {

  private http: HttpClient;
  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  public get(path: string) {
    return this.http.get<T>(path);
  }

  public post(path: string, payload: T) {
    return this.http.post<T>(path, payload);
  }

  public put(path: string, payload: T) {
    return this.http.put<T>(path, payload)
  }
}
