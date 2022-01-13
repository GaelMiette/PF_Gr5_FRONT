import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espacecandidat',
  templateUrl: './espacecandidat.component.html',
  styleUrls: ['./espacecandidat.component.css']
})
export class EspacecandidatComponent implements OnInit {

  shouldShow = false;
  
  // user = {

  //   nom: "sparrow", 
  //   prenom: "jack", 
  //   age: 35,
  //   mail: "blackpearl@bouh.fr",
    
  //   profession: "pirate",
  //   experience: 20,
  //   departement: "bouh",
  // }

  user = null;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.user);
  }

  display_form(should){
    this.shouldShow = should
  }

}
