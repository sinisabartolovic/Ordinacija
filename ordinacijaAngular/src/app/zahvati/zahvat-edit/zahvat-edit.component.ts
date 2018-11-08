import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ZahvatService } from 'src/app/shared/zahvat.service';
import { Zahvat } from 'src/app/shared/zahvat.model';
import { AlertifyService } from 'src/app/shared/alertify.service';

@Component({
  selector: 'app-zahvat-edit',
  templateUrl: './zahvat-edit.component.html',
  styleUrls: ['./zahvat-edit.component.css']
})
export class ZahvatEditComponent implements OnInit {
  editPostFormZahvat: FormGroup;
  emiter: EventEmitter<any> = new EventEmitter();
  zahvatId: number;
  postData: any;
  updatedZahvat: Zahvat = new Zahvat();
  greska = '';
  zahvatTrajanje: number;

  constructor(private builder: FormBuilder, private zahvatService: ZahvatService, private bsModalRef: BsModalRef,
    private alertify: AlertifyService) {
     this.editPostFormZahvat = this.builder.group({
      naziv: new FormControl('', []),
      cijena: new FormControl('', []),
      sifra: new FormControl('', [])
  });
  this.zahvatService.postIdSource.subscribe(data => {
    this.zahvatId = data;
    if (this.zahvatId !== undefined) {
      this.zahvatService.getZahvat(this.zahvatId).subscribe(d => {
        this.postData = d;
        if (this.editPostFormZahvat !== null  && this.postData !== null) {
          this.editPostFormZahvat.controls['naziv'].setValue(this.postData.Naziv);
          this.editPostFormZahvat.controls['cijena'].setValue(this.postData.Cijena);
          this.editPostFormZahvat.controls['sifra'].setValue(this.postData.Sifra);
        }
      }, error => { this.alertify.error('Došlo je do pogreške kod dohvata podataka!'); });
    }
  });
}
onPostEditFormSubmit() {
  this.updatedZahvat.ZahvatId = this.zahvatId;
  this.updatedZahvat.Naziv = this.editPostFormZahvat.get('naziv').value;
  this.updatedZahvat.Cijena = this.editPostFormZahvat.get('cijena').value;
  this.updatedZahvat.Sifra = this.editPostFormZahvat.get('sifra').value;
  this.updatedZahvat.Trajanje = this.postData.Trajanje;


  this.zahvatService.updateZahvat(this.updatedZahvat).subscribe(data => {
      this.emiter.emit('OK');
      this.bsModalRef.hide();
      this.alertify.success('zahvat je uspješno izmjenjen');
  },
  (err) => {console.log(err); this.alertify.error('Došlo je do pogreške! Provjerite upis!'); });
}
onClose() {
  this.bsModalRef.hide();
}
  ngOnInit() {
  }
}
