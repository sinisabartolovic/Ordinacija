import { Component, OnInit, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ZahvatService } from '../../shared/zahvat.service';
import { Zahvat } from '../../shared/zahvat.model';
import { AlertifyService } from 'src/app/shared/alertify.service';

@Component({
  selector: 'app-zahvat-dodaj-novi',
  templateUrl: './zahvatDodajNovi.component.html',
  styleUrls: ['./zahvatDodajNovi.component.css']
})
export class ZahvatDodajNoviComponent implements OnInit {
  addNewPostForm: FormGroup;
  zahvat: Zahvat = new Zahvat();
  emiter: EventEmitter<any> = new EventEmitter();
  greska = '';

  constructor(private builder: FormBuilder, private zahvatService: ZahvatService, private bsModalRef: BsModalRef,
    private alertify: AlertifyService) {
    this.addNewPostForm = this.builder.group({
      naziv: new FormControl('', []),
      cijena: new FormControl('', []),
      sifra: new FormControl('', []),
      trajanje: new FormControl('', [])
    });
  }
  ngOnInit() {
  }

  onPostFormDodajZahvat() {
    this.zahvat.Naziv = this.addNewPostForm.get('naziv').value;
    this.zahvat.Cijena = this.addNewPostForm.get('cijena').value;
    this.zahvat.Sifra = this.addNewPostForm.get('sifra').value;
    this.zahvat.Trajanje = this.addNewPostForm.get('trajanje').value;
    this.zahvatService.dodajZahvat(this.zahvat).subscribe(data => {
      if (data != null) {
        this.emiter.emit('OK');
        this.bsModalRef.hide();
        this.alertify.success('zahvat je dodan');
      }
    },
    (err) => {console.log(err); this.alertify.error('Došlo je do pogreške! Provjerite upis!'); }
    );
  }

  onClose() {
    this.bsModalRef.hide();
  }

}
