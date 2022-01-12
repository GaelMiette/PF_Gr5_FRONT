import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoriqueCandidatComponent } from './pages/historique-candidat/historique-candidat.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoriqueCandidatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
