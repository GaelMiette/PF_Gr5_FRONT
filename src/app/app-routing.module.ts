import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { EspacecandidatComponent } from './pages/espacecandidat/espacecandidat.component';
import { EspacerecruteurComponent } from './pages/espacerecruteur/espacerecruteur.component';
import { HistoriqueCandidatComponent } from './pages/historique-candidat/historique-candidat.component';

const routes: Routes = [
  {path: '', redirectTo: "/accueil", pathMatch: "full" },
  {path: "historique_candidat", component: HistoriqueCandidatComponent},
  {path:"accueil", component: AccueilComponent},
  {path:"espc", component: EspacecandidatComponent},
  {path:"espr", component: EspacerecruteurComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
