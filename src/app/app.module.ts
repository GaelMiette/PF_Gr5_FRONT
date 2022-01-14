import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HistoriqueCandidatComponent } from './pages/historique-candidat/historique-candidat.component';
import { HistoriqueRecruteurComponent } from './pages/historique-recruteur/historique-recruteur.component';
import { FormAnnonceComponent } from './pages/form-annonce/form-annonce.component';
import { UpdateAnnonceComponent } from './pages/update-annonce/update-annonce.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    HistoriqueCandidatComponent,
    HistoriqueRecruteurComponent,
    FormAnnonceComponent,
    UpdateAnnonceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
