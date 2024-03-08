import { Routes } from '@angular/router';
import { EulogyComponent } from './eulogy/eulogy.component';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'eulogy', component: EulogyComponent },
    { path: 'contact', component: ContactComponent }
];
