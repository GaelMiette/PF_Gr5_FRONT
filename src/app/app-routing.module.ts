import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspacecandidatComponent } from './pages/espacecandidat/espacecandidat.component';
import { EspacerecruteurComponent } from './pages/espacerecruteur/espacerecruteur.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full" },
  {path: "espc", component: EspacecandidatComponent},
  {path: "espr", component: EspacerecruteurComponent},
  {path: "home" , component : AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
