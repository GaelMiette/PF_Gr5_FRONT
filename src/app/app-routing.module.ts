import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdsComponent } from './ads/ads.component';
import { LittleAdComponent } from './little-ad/little-ad.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path :'' , redirectTo:"home" , pathMatch : "full"},
  {path:"home" , component : AccueilComponent},
  {path:"login" , component : LoginComponent},
  {path:"register" , component : RegisterComponent},
  {path:"ad" , component : LittleAdComponent},
  {path:"ads" , component : AdsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
