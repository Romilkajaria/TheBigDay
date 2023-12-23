import {Injectable, Injector} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class BaseCommonRestService {

  private http: HttpClient;
  private messageService: MessageService;
  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
    this.messageService = injector.get(MessageService)
  }

  protected get<T>(path: string) {
    return this.http.get<T>(path);
  }

  protected post<T>(path: string, payload: T) {
    return this.http.post<T>(path, payload);
  }

  protected put<T>(path: string, payload: T) {
    return this.http.put<T>(path, payload)
  }

  protected delete<T>(path: string) {
    return this.http.delete(path);
  }
}
