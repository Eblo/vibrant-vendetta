import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AppConfig, AppConfigService, ContactLink } from '../app-config.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    CardModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactLinks: ContactLink[] = [];

  constructor(appConfig: AppConfigService) {
    appConfig.loadAppConfig().subscribe(config => this.contactLinks = (config as AppConfig).contact);
  }
}
