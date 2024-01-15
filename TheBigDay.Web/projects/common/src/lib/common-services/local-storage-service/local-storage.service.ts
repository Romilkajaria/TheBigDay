import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

    public getItem<T>(key: string): T | undefined {
      const item = localStorage.getItem(key);
      if(item) {
          return JSON.parse(item) as T;
      }
      return;
    }

    public setItem<T>(key: string, data: T) {
      localStorage.setItem(key, JSON.stringify(data));
    }
}
