import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacijent } from './pacijent.model';
import { environment } from 'src/environments/environment';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacijentService {
  baseUrl = environment.apiUrl;
  idEmitter = new BehaviorSubject<number>(0);

  constructor(private httpClient: HttpClient) { }

  dodajPacijenta(noviPacijent: Pacijent) {
    return this.httpClient.post(this.baseUrl + 'Pacijent/', noviPacijent);
  }
  getAllPacijent() {
    return this.httpClient.get<Pacijent[]>(this.baseUrl + 'Pacijent/');
  }
  getPacijent(pacijentId: number) {
    return this.httpClient.get(this.baseUrl + 'Pacijent/' + pacijentId);
  }
  updatePacijent(pac: Pacijent) {
    return this.httpClient.put(this.baseUrl + 'Pacijent/' + pac.PacijentID, pac);
  }
  changePostId(postId: number) {
    this.idEmitter.next(postId);
  }
}
