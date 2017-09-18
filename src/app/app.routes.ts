
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {DronsComponent} from './components/drons/drons.component';
import {DronComponent} from './components/dron/dron.component';
import {SearchComponent} from './components/search/search.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'drons', component: DronsComponent },
  { path: 'dron/:id', component: DronComponent },
  { path: 'search/:term', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
