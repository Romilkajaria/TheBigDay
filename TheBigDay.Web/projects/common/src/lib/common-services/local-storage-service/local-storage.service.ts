import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

    public getItem(key: string): string | null {
      return localStorage.getItem(key);
    }

    public setItem(key: string, data: string) {
        localStorage.setItem(key, data)
    }

    public deleteItem(key: string) {
      localStorage.removeItem(key);
    }

    public clearStorage() {
      localStorage.clear();
    }
}
