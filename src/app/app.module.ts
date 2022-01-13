import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoriqueCandidatComponent } from './pages/historique-candidat/historique-candidat.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { EspacecandidatComponent } from './pages/espacecandidat/espacecandidat.component';
import { EspacerecruteurComponent } from './pages/espacerecruteur/espacerecruteur.component';
import { HistoriqueRecruteurComponent } from './pages/historique-recruteur/historique-recruteur.component';
import { FormAnnonceComponent } from './pages/form-annonce/form-annonce.component';
import { UpdateAnnonceComponent } from './pages/update-annonce/update-annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoriqueCandidatComponent,
    AccueilComponent,
    EspacecandidatComponent,
    EspacerecruteurComponent,
    HistoriqueRecruteurComponent,
    FormAnnonceComponent,
    UpdateAnnonceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
