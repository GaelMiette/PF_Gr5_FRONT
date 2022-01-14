import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAnnonceComponent } from './pages/form-annonce/form-annonce.component';
import { HistoriqueCandidatComponent } from './pages/historique-candidat/historique-candidat.component';
import { HistoriqueRecruteurComponent } from './pages/historique-recruteur/historique-recruteur.component';
import { UpdateAnnonceComponent } from './pages/update-annonce/update-annonce.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full" },
  {path: "historique_candidat", component: HistoriqueCandidatComponent},
  {path: "historique_recruteur", component: HistoriqueRecruteurComponent},
  {path: "form_annonce", component: FormAnnonceComponent},
  {path: "update_annonce", component: UpdateAnnonceComponent},
  {path: "home" , component : AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
