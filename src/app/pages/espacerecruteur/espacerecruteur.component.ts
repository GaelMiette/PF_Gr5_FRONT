import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espacerecruteur',
  templateUrl: './espacerecruteur.component.html',
  styleUrls: ['./espacerecruteur.component.css']
})
export class EspacerecruteurComponent implements OnInit {

  default_img_url = "https://th.bing.com/th/id/R.88f4f67fe36423a9f099e32757f61acc?rik=CLtRO2eGANx4Vw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_329115.png&ehk=mXoK%2be700RIpbejgADkfZYJSnzVqJhHHmQWdguPy40k%3d&risl=&pid=ImgRaw&r=0"
  shouldShow = false;
  user = null;
  // liste de tous les departements dispos
  departements = null;
  // département renseigné dans le formulaire
  departement = null;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    this.departements = JSON.parse(sessionStorage.getItem("departements"));
  }

  display_form(should){
    this.shouldShow = should
  }

}
