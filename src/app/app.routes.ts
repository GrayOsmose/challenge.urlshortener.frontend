import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { UrlsComponent } from './urls';
import { NoContentComponent } from '../common/no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'urls',      component: UrlsComponent },
  { path: '**',    component: NoContentComponent },
];
