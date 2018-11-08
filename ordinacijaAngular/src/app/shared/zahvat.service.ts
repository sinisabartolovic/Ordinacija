import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Zahvat } from './zahvat.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZahvatService {
baseUrl = environment.apiUrl;
postIdData: any;
postIdSource = new BehaviorSubject<number>(0);


constructor(private httpClient: HttpClient) { }

getAllZahvat(): Observable<Zahvat[]> {
  return this.httpClient.get<Zahvat[]>(this.baseUrl + 'Zahvat/');
}
dodajZahvat(zah: Zahvat) {
  return this.httpClient.post(this.baseUrl + 'Zahvat/', zah);
}
getZahvat(zahvatId: number) {
  return this.httpClient.get(this.baseUrl + 'Zahvat/' + zahvatId);
}
updateZahvat(zah: Zahvat) {
  return this.httpClient.put(this.baseUrl + 'Zahvat/' + zah.ZahvatId, zah);
}
changePostId(postId: number) {
  this.postIdSource.next(postId);
}
}
