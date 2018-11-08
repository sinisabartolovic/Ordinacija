import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from 'ng-fullcalendar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { NovaRezervacijaComponent } from './nova-rezervacija/nova-rezervacija.component';
import { PacijentiComponent } from './pacijenti/pacijenti.component';

import { AlertifyService } from './shared/alertify.service';
import { PacijentService } from './shared/pacijent.service';
import { RezervacijaService } from './shared/rezervacija.service';
import { ZahvatiComponent } from './zahvati/zahvati.component';
import { ZahvatService } from './shared/zahvat.service';
import { ZahvatDodajNoviComponent } from './zahvati/zahvatDodajNovi/zahvatDodajNovi.component';
import { ZahvatEditComponent } from './zahvati/zahvat-edit/zahvat-edit.component';
import { PacijentDodajNoviComponent } from './pacijenti/pacijent-dodaj-novi/pacijent-dodaj-novi.component';
import { PacijentEditComponent } from './pacijenti/pacijent-edit/pacijent-edit.component';

@NgModule({
   declarations: [
      AppComponent,
      RezervacijaComponent,
      NavigacijaComponent,
      NovaRezervacijaComponent,
      PacijentiComponent,
      ZahvatiComponent,
      ZahvatDodajNoviComponent,
      ZahvatEditComponent,
      PacijentDodajNoviComponent,
      PacijentEditComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      FullCalendarModule,
      HttpModule,
      HttpClientModule,
      ReactiveFormsModule,
      ModalModule.forRoot(),
      BsDatepickerModule.forRoot()
   ],
   providers: [AlertifyService, PacijentService, RezervacijaService, ZahvatService],
   bootstrap: [AppComponent],
   entryComponents: [ZahvatDodajNoviComponent, ZahvatEditComponent, PacijentDodajNoviComponent, PacijentEditComponent]
})
export class AppModule { }
