import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacijent } from './pacijent.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacijentService {
  baseUrl = environment.apiUrl;
  promjena = new Subject<void>();

  constructor(private httpClient: HttpClient) { }

  upisPacijenta(noviPacijent: Pacijent) {
    return this.httpClient.post(this.baseUrl + 'Pacijent/', noviPacijent)
    .subscribe(
        (transformedData: any) => {
            // Use your response data here
            console.log(transformedData);
            this.promjena.next();
        }
    );
  }
  getAllPacijent() {
    return this.httpClient.get<Pacijent[]>(this.baseUrl + 'Pacijent/');
  }
  updatePacijenta(id: number, izmjenjeniPacijent: Pacijent) {
    return this.httpClient.put(this.baseUrl + 'Pacijent/' + id, izmjenjeniPacijent);
  }
}
