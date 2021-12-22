import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';
import { HeroTableComponent } from './hero-table/hero-table.component';
import {TableModule} from 'primeng/table';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TableModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroTableComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }