import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Pacijent } from '../shared/pacijent.model';
import { PacijentService } from '../shared/pacijent.service';

@Component({
  selector: 'app-pacijenti',
  templateUrl: './pacijenti.component.html',
  styleUrls: ['./pacijenti.component.css']
})
export class PacijentiComponent implements OnInit {
  pacijent: Pacijent = new Pacijent;
  pacijentService: PacijentService;
  @ViewChild('formDodajPacijenta') formDodajPacijenta;
  @ViewChild('closePacijentiModalBtn') closePacijentiModalBtn: ElementRef;

  constructor(pacijentService: PacijentService) { this.pacijentService = pacijentService; }

  ngOnInit() {
  }

  dodajPacijenta(noviPacijent) {
    if (!noviPacijent.invalid) {
    this.pacijent.Ime = noviPacijent.value.ime;
    this.pacijent.Prezime = noviPacijent.value.prezime;
    this.pacijent.Adresa = noviPacijent.value.adresa;
    this.pacijent.Telefon = noviPacijent.value.telefon;
    this.pacijent.DatumRodenja = new Date(noviPacijent.value.datumRodenja);
    this.pacijentService.upisPacijenta(this.pacijent);
    this.formDodajPacijenta.resetForm();
    this.closeModal();

   }
  }
  private closeModal(): void {
    this.closePacijentiModalBtn.nativeElement.click();
}

}
