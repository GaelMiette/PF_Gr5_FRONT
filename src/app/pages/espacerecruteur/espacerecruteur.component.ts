import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espacerecruteur',
  templateUrl: './espacerecruteur.component.html',
  styleUrls: ['./espacerecruteur.component.css']
})
export class EspacerecruteurComponent implements OnInit {

  shouldShow = false;
  user = {

    nom: "sparrow", 
    prenom: "jack", 
    entreprise: "froustillon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/langfr-220px-Angular_full_color_logo.svg.png",
    departement: "bouh",
  }

  constructor() { }

  ngOnInit(): void {
    // récupérer le user depuis le session storage
    // le session storage est créé depuis le login
  }

  display_form(should){
    this.shouldShow = should
  }

}
