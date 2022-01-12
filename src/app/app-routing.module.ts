import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriqueCandidatComponent } from './pages/historique-candidat/historique-candidat.component';

const routes: Routes = [
  {path: "historique_candidat", component: HistoriqueCandidatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
