import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espacerecruteur',
  templateUrl: './espacerecruteur.component.html',
  styleUrls: ['./espacerecruteur.component.css']
})
export class EspacerecruteurComponent implements OnInit {

  shouldShow = false;
  // user = {

  //   nom: "sparrow", 
  //   prenom: "jack", 
  //   entreprise: "froustillon",
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/langfr-220px-Angular_full_color_logo.svg.png",
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
