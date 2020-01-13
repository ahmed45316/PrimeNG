import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AutoCompleteModule } from '../components/autocomplete/autocomplete';

import { CountryService } from './service/countryservice';
import { EventService } from './service/eventservice'; 
import { NodeService } from './service/nodeservice';
import { IconService } from './service/iconservice';
import { FullCalendarComponent } from './Screens/full-calendar/full-calendar.component';
import {FullCalendarModule} from 'primeng/fullcalendar'

@NgModule({
  declarations: [
    AppComponent,
    FullCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FullCalendarModule
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },CountryService,EventService,NodeService,IconService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }