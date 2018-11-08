import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PacijentService } from 'src/app/shared/pacijent.service';
import { AlertifyService } from 'src/app/shared/alertify.service';
import { Pacijent } from 'src/app/shared/pacijent.model';

@Component({
  selector: 'app-pacijent-edit',
  templateUrl: './pacijent-edit.component.html',
  styleUrls: ['./pacijent-edit.component.css']
})
export class PacijentEditComponent implements OnInit {
  editPostFormPacijent: FormGroup;
  pacijentId: number;
  postData: any;
  updatedPacijent: Pacijent = new Pacijent();
  emiter: EventEmitter<any> = new EventEmitter();

  constructor(private pacijentService: PacijentService, private alertify: AlertifyService,
    private builder: FormBuilder, private bsModalRef: BsModalRef ) {
      this.editPostFormPacijent = this.builder.group({
        ime: new FormControl('', []),
        prezime: new FormControl('', []),
        datumRodenja: new FormControl('', []),
        adresa: new FormControl('', []),
        telefon: new FormControl('', [])
    });
    this.pacijentService.idEmitter.subscribe(data => {
      this.pacijentId = data;
      if (this.pacijentId !== undefined) {
        this.pacijentService.getPacijent(this.pacijentId).subscribe(d => {
          this.postData = d;
          if (this.editPostFormPacijent !== null  && this.postData !== null) {
            this.editPostFormPacijent.controls['ime'].setValue(this.postData.Ime);
            this.editPostFormPacijent.controls['prezime'].setValue(this.postData.Prezime);
            let newDate = new Date(this.postData.DatumRodenja);
            this.editPostFormPacijent.controls['datumRodenja'].setValue(newDate);
            this.editPostFormPacijent.controls['adresa'].setValue(this.postData.Adresa);
            this.editPostFormPacijent.controls['telefon'].setValue(this.postData.Telefon);
          }
        }, error => { this.alertify.error('Došlo je do pogreške kod dohvata podataka!'); });
      }
    });
  }
  onPostEditFormSubmit() {
    this.updatedPacijent.PacijentID = this.postData.PacijentID;
    this.updatedPacijent.Ime = this.editPostFormPacijent.get('ime').value;
    this.updatedPacijent.Prezime = this.editPostFormPacijent.get('prezime').value;
    this.updatedPacijent.DatumRodenja = this.editPostFormPacijent.get('datumRodenja').value;
    this.updatedPacijent.Adresa = this.editPostFormPacijent.get('adresa').value;
    this.updatedPacijent.Telefon = this.editPostFormPacijent.get('telefon').value;
    this.pacijentService.updatePacijent(this.updatedPacijent).subscribe(data => {
        this.emiter.emit('OK');
        this.bsModalRef.hide();
        this.alertify.success('pacijent je uspješno izmjenjen');
    },
    (err) => {console.log(err); this.alertify.error('Došlo je do pogreške! Provjerite upis!'); });
  }
  onClose() {
    this.bsModalRef.hide();
  }

  ngOnInit() {
  }

}
