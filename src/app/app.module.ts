import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import {APP_ROUTING} from './app.routes';

//Services
import {DronsService} from './services/drons.service';


//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DronsComponent } from './components/drons/drons.component';
import { DronComponent } from './components/dron/dron.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DronsComponent,
    DronComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    DronsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
