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

  protected get<T>(path: string, params?: {[key: string]: string}) {
    return this.http.get<T>(path, {params} );
  }

  protected post<T>(path: string, payload: any) {
    return this.http.post<T>(path, payload);
  }

  protected put<T>(path: string, payload: T) {
    return this.http.put<T>(path, payload)
  }

  protected delete<T>(path: string) {
    return this.http.delete(path);
  }
}
