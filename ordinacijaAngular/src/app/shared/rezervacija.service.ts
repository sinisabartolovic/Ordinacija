import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rezervacija } from './rezervacija.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RezervacijaService {
  baseUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getAllRezervacija(): Observable<Rezervacija[]> {
    return this.httpClient.get<Rezervacija[]>(this.baseUrl + 'Rezervacija/');
  }
}
