import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Pacijent } from '../shared/pacijent.model';
import { PacijentService } from '../shared/pacijent.service';
import { AlertifyService } from '../shared/alertify.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PacijentDodajNoviComponent } from '../pacijenti/pacijent-dodaj-novi/pacijent-dodaj-novi.component';
import { PacijentEditComponent } from '../pacijenti/pacijent-edit/pacijent-edit.component';

@Component({
  selector: 'app-pacijenti',
  templateUrl: './pacijenti.component.html',
  styleUrls: ['./pacijenti.component.css']
})
export class PacijentiComponent implements OnInit {
  pacijenti = [];
  bsModalRef: BsModalRef;

  constructor(private pacijentService: PacijentService, private alertify: AlertifyService, private bsModalService: BsModalService) { }

  ngOnInit() {
    this.getAllPacijenti();
  }

  getAllPacijenti() {
    this.pacijentService.getAllPacijent().subscribe((pac: Pacijent[]) => {
      this.pacijenti = pac;
    });
}
  addNewPacijent() {
    this.bsModalRef = this.bsModalService.show(PacijentDodajNoviComponent);
    this.bsModalRef.content.emiter.subscribe(result => {
      if (result === 'OK') {
        this.getAllPacijenti();
      }
    });
  }
  editPacijent(postId: number) {
    this.pacijentService.changePostId(postId);

    this.bsModalRef = this.bsModalService.show(PacijentEditComponent);
    this.bsModalRef.content.emiter.subscribe(result => {
      if (result === 'OK') {
        setTimeout(() => {
          this.getAllPacijenti();
        }, 500);
      }
    });
  }
}
