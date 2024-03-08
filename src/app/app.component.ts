import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AppConfig, AppConfigService } from './app-config.service';

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
  appConfig: AppConfig = {title: '', copyright: '', menu: []};
  items: MenuItem[] = [];

  activeItem: MenuItem | undefined;
  currentPage: string = 'Home';

  constructor(private router: Router, appConfig: AppConfigService) {
    this.router = router;
    appConfig.loadAppConfig().subscribe(config => {
      this.appConfig = config as AppConfig;
    });
  }

  navigateTo(item: MenuItem): void {
    console.log(item);
    this.currentPage = item.label || 'Home';
    this.router.navigate([item.routerLink]);
  }
}
