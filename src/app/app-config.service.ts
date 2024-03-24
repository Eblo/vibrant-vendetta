import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private http: HttpClient;
  private appConfig: AppConfig = {} as AppConfig;
  private loaded = false;

  constructor(http: HttpClient) {
    this.http = http;
  }

  loadAppConfig(): Observable<{}> {

    // Don't make another request if we're already loaded
    if(this.loaded) {
      return of(this.appConfig);
    }

    let result = this.http.get('/assets/config/app-config.json');
    result.subscribe((config) => {
      this.appConfig = config as AppConfig;
      this.loaded = true;
    });
    return result;
  }
}

export interface ContactLink {
  icon: string,
  label: string,
  routerLink: string
}

export interface AppConfig {
  title: string,
  copyright: string,
  menu: MenuItem[],
  contact: ContactLink[]
}