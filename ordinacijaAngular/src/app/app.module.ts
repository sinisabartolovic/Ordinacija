import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { NovaRezervacijaComponent } from './nova-rezervacija/nova-rezervacija.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PacijentiComponent } from './pacijenti/pacijenti.component';
import { FormsModule } from '@angular/forms';
import { PacijentiListComponent } from './pacijenti-list/pacijenti-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RezervacijaComponent,
    NavigacijaComponent,
    NovaRezervacijaComponent,
    PacijentiComponent,
    PacijentiListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FullCalendarModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
