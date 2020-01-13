import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule, FullCalendarModule } from '../components/public_api';
import { CountryService } from '../showcase/service/countryservice';
import { EventService } from '../showcase/service/eventservice';
import { NodeService } from '../showcase/service/nodeservice';
import { IconService } from '../showcase/service/iconservice';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, SideBarComponent, FooterComponent, LayoutComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    FullCalendarModule
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },CountryService,EventService,NodeService,IconService
  ],
})
export class DashBoardModule { }
