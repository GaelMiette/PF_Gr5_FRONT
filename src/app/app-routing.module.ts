import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdsComponent } from './ads/ads.component';
import { LittleAdComponent } from './little-ad/little-ad.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full" },
  {path: "home" , component : AccueilComponent},
  {path: "ad/:id" , component : LittleAdComponent},
  {path: "ads" , component : AdsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
