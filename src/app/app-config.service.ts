import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  loadAppConfig(): Observable<{}> {
    return this.http.get('/assets/config/app-config.json');
  }
}

export interface AppConfig {
  title: string,
  copyright: string,
  menu: MenuItem[]
}
