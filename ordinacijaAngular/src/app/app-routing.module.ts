import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovaRezervacijaComponent } from './nova-rezervacija/nova-rezervacija.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { PacijentiComponent } from './pacijenti/pacijenti.component';

const routes: Routes = [
  {path: '', component: RezervacijaComponent},
  {path: 'nova-rezervacija', component: NovaRezervacijaComponent},
  {path: 'pacijenti', component: PacijentiComponent},
  {path: '**', component: RezervacijaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
