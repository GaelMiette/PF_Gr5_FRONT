import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { HistoriqueCandidatComponent } from './pages/historique-candidat/historique-candidat.component';
import { EspacecandidatComponent } from './pages/espacecandidat/espacecandidat.component';
import { EspacerecruteurComponent } from './pages/espacerecruteur/espacerecruteur.component';
import { HistoriqueRecruteurComponent } from './pages/historique-recruteur/historique-recruteur.component';
import { FormAnnonceComponent } from './pages/form-annonce/form-annonce.component';
import { UpdateAnnonceComponent } from './pages/update-annonce/update-annonce.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AccueilComponent,
    LoginComponent,
    RegisterComponent
     HistoriqueCandidatComponent,
    EspacecandidatComponent,
    EspacerecruteurComponent,
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
