import { Component, OnInit } from '@angular/core';
import { RezervacijaService } from '../shared/rezervacija.service';

@Component({
  selector: 'app-nova-rezervacija',
  templateUrl: './nova-rezervacija.component.html',
  styleUrls: ['./nova-rezervacija.component.css']
})
export class NovaRezervacijaComponent implements OnInit {


  constructor(private rezervacijaService: RezervacijaService) {
   }

  ngOnInit() {
  }

}
