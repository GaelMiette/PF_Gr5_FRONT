import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspacecandidatComponent } from './pages/espacecandidat/espacecandidat.component';
import { EspacerecruteurComponent } from './pages/espacerecruteur/espacerecruteur.component';
import { FormAnnonceComponent } from './pages/form-annonce/form-annonce.component';
import { HistoriqueCandidatComponent } from './pages/historique-candidat/historique-candidat.component';
import { HistoriqueRecruteurComponent } from './pages/historique-recruteur/historique-recruteur.component';
import { UpdateAnnonceComponent } from './pages/update-annonce/update-annonce.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AdsComponent } from './ads/ads.component';
import { LittleAdComponent } from './little-ad/little-ad.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AnnonceListeCandidatsComponent } from './pages/annonce-liste-candidats/annonce-liste-candidats.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full" },
  {path: "historique_candidat", component: HistoriqueCandidatComponent},
  {path: "historique_recruteur", component: HistoriqueRecruteurComponent},
  {path: "form_annonce", component: FormAnnonceComponent},
  {path: "upd_ad/:id", component: UpdateAnnonceComponent},
  {path: "espc", component: EspacecandidatComponent},
  {path: "espr", component: EspacerecruteurComponent},
  {path: "home" , component : AccueilComponent},
  {path: "login" , component : LoginComponent},
  {path: "register" , component : RegisterComponent},
  {path: "ad/:id" , component : LittleAdComponent},
  {path: "ads" , component : AdsComponent},
  {path: "listeCandidats/:id" , component : AnnonceListeCandidatsComponent},
  {path:"about" , component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
