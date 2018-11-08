import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { RezervacijaService } from '../shared/rezervacija.service';
import { Rezervacija } from '../shared/rezervacija.model';
import {Observable, Subject, from} from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.component.html',
  styleUrls: ['./rezervacija.component.css'],
})
export class RezervacijaComponent implements OnInit {
  sve = [];
  sveRezervacije: Rezervacija [] ;
  calendarOptions: Options;

  // @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(private rezervacijaService: RezervacijaService) {}

  ngOnInit() {
    this.rezervacijaService.getAllRezervacija().subscribe((rez: Rezervacija[]) => {
    this.sveRezervacije = rez;
    this.calendarOptions = {
      minTime: moment.duration('07:00:00'),
      maxTime: moment.duration('16:00:00'),
      contentHeight: 'auto',
      noEventsMessage: 'Nema zakazanih termina',
      events: this.sveRezervacije ,
      editable: false,
      eventLimit: false,
      defaultView: 'agendaDay',
      locale: 'hr-HR',
      buttonText: {
      today:    'Danas',
      month:    'mjesec',
      week:     'tjedni raspored',
      day:      'dnevni raspored',
      list:     'popis'},
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'agendaWeek,agendaDay'
      },
  };
});
}
eventClick(model: any) {
  alert('Treba implementirati potvrdu rezervacije na klik ' + model.event.title);
}

}
