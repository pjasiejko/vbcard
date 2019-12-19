import {Routes} from '@angular/router';
import {ContactComponent} from './contact.component';

const CONTACT_ROUTES = [];

export const contactState: Routes = [
  {
    path: '',
    component: ContactComponent,
    children: CONTACT_ROUTES
  }
];
