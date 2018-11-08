import { Component, OnInit, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Pacijent } from 'src/app/shared/pacijent.model';
import { PacijentService } from 'src/app/shared/pacijent.service';
import { AlertifyService } from 'src/app/shared/alertify.service';

@Component({
  selector: 'app-pacijent-dodaj-novi',
  templateUrl: './pacijent-dodaj-novi.component.html',
  styleUrls: ['./pacijent-dodaj-novi.component.css']
})
export class PacijentDodajNoviComponent implements OnInit {
  addNewPacijentForm: FormGroup;
  pacijent: Pacijent = new Pacijent();
  emiter: EventEmitter<any> = new EventEmitter();
  greska = '';

  constructor(private builder: FormBuilder, private pacijentService: PacijentService,
    private bsModalRef: BsModalRef, private alertify: AlertifyService) {
    this.addNewPacijentForm = this.builder.group({
      ime: new FormControl('', []),
      prezime: new FormControl('', []),
      datumRodenja: new FormControl('', []),
      adresa: new FormControl('', []),
      telefon: new FormControl('', [])
    });
   }
   onPostFormDodajPacijenta() {
    this.pacijent.Ime = this.addNewPacijentForm.get('ime').value;
    this.pacijent.Prezime = this.addNewPacijentForm.get('prezime').value;
    this.pacijent.DatumRodenja = this.addNewPacijentForm.get('datumRodenja').value;
    this.pacijent.Telefon = this.addNewPacijentForm.get('telefon').value;
    this.pacijent.Adresa = this.addNewPacijentForm.get('adresa').value;

      this.pacijentService.dodajPacijenta(this.pacijent).subscribe(data => {
      console.log(data);
      if (data != null) {
        this.emiter.emit('OK');
        this.bsModalRef.hide();
        this.alertify.success('pacijent je dodan');
      }
    },
    (err) => {console.log(err); this.alertify.error('Došlo je do pogreške! Provjerite upis!'); }
    );
  }
   onClose() {
    this.bsModalRef.hide();
   }
  ngOnInit() {
  }

}
