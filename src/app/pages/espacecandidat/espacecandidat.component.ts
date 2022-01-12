import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espacecandidat',
  templateUrl: './espacecandidat.component.html',
  styleUrls: ['./espacecandidat.component.css']
})
export class EspacecandidatComponent implements OnInit {

  shouldShow = false;
  user = {

    nom: "sparrow", 
    prenom: "jack", 
    age: 35,
    mail: "blackpearl@bouh.fr",
    
    profession: "pirate",
    experience: 20,
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
