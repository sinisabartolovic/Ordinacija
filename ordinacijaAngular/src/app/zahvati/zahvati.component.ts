import { Component, OnInit, TemplateRef} from '@angular/core';
import { ZahvatService } from '../shared/zahvat.service';
import { Zahvat } from '../shared/zahvat.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ZahvatDodajNoviComponent } from '../zahvati/zahvatDodajNovi/zahvatDodajNovi.component';
import { ZahvatEditComponent } from '../zahvati/zahvat-edit/zahvat-edit.component';

@Component({
  selector: 'app-zahvati',
  templateUrl: './zahvati.component.html',
  styleUrls: ['./zahvati.component.css']
})
export class ZahvatiComponent implements OnInit {
  zahvati = [];
  bsModalRef: BsModalRef;

  constructor(private zahvatService: ZahvatService, private bsModalService: BsModalService) { }

  ngOnInit() {
   this.getAllZahvat();
  }
  addNewZahvat() {
    this.bsModalRef = this.bsModalService.show(ZahvatDodajNoviComponent);
    this.bsModalRef.content.emiter.subscribe(result => {
      if (result === 'OK') {
        this.getAllZahvat();
      }
    });
  }
  getAllZahvat() {
    this.zahvatService.getAllZahvat().subscribe((zah: Zahvat[]) => {
      this.zahvati = zah;
    });
  }
  editZahvat(postId: number) {
    this.zahvatService.changePostId(postId);

    this.bsModalRef = this.bsModalService.show(ZahvatEditComponent);
    this.bsModalRef.content.emiter.subscribe(result => {
      if (result === 'OK') {
        setTimeout(() => {
          this.getAllZahvat();
        }, 500);
      }
    });
  }

}
