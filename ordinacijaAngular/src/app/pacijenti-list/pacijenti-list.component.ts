import { Component, OnInit, ViewChild } from '@angular/core';
import { Pacijent } from '../shared/pacijent.model';
import { PacijentService } from '../shared/pacijent.service';

@Component({
  selector: 'app-pacijenti-list',
  templateUrl: './pacijenti-list.component.html',
  styleUrls: ['./pacijenti-list.component.css']
})
export class PacijentiListComponent implements OnInit {
  display = 'none';
  pacijenti: Pacijent [];
  pacijent: Pacijent = new Pacijent;
  pacijentService: PacijentService;
  @ViewChild('formUrediPacijenta') formUrediPacijenta;

  constructor(pacijentService: PacijentService) { this.pacijentService = pacijentService; }

  ngOnInit() {
    this.pacijentService.getAllPacijent().subscribe((pac: Pacijent[]) => {
      this.pacijenti = pac;
    });
    this.pacijentService.promjena.subscribe(() => {
      this.pacijentService.getAllPacijent().subscribe((pac: Pacijent[]) => {
        this.pacijenti = pac;
    });
  });
}
spremiPacijenta(pacijent) {
  this.pacijentService.updatePacijenta(pacijent.id, pacijent).subscribe((pac: Pacijent[]) => {
    this.closeModal();
});
}
openModal(pacijent) {
  this.formUrediPacijenta.resetForm();
  this.pacijent = pacijent;
  this.display = 'block';
}
closeModal() {
  this.display = 'none';
}
zatvoriModal() {
  this.formUrediPacijenta.resetForm();
}
}
