import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AppConfig, AppConfigService } from './app-config.service';

const defaultPage: string = 'Home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ToolbarModule,
    ButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  appConfig: AppConfig = {title: '', copyright: '', menu: [], contact: []};

  activeItem: MenuItem | undefined;
  currentPage: string = defaultPage;

  constructor(private router: Router, appConfig: AppConfigService) {
    this.router = router;
    appConfig.loadAppConfig().subscribe(config => {
      this.appConfig = config as AppConfig;
      // Highlight the button matching the current page, defaulting to Home if no match
      this.activeItem = this.appConfig.menu.find((menuItem) => menuItem.routerLink == this.router.url) || this.appConfig.menu[0];
      this.currentPage = this.activeItem.label || defaultPage;
    });
  }

  navigateTo(item: MenuItem): void {
    this.currentPage = item.label || defaultPage;
    this.router.navigate([item.routerLink]);
  }
}
