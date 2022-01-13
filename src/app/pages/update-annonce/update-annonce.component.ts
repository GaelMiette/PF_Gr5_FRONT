import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent implements OnInit {

  // user = JSON.parse(sessionStorage.getItem("user"))
  user = {
    nom: "sparrow", 
    prenom: "jack", 
    entreprise: "entreprise 1664",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Logo_Bi%C3%A8re_1664_en_2021.png/180px-Logo_Bi%C3%A8re_1664_en_2021.png",
    departement: "bouh",
  }

  date = new Date();

  anounce = {
    titre: "",
    description: "",
    categorie: "",
    date: this.date.getDate() + "/" + this.date.getMonth()+1 + "/" + this.date.getFullYear(),
    salaire: 0,
    type_contrat: "",
    teletravail: false,
    recruteur: this.user,
  }

  constructor() { }

  ngOnInit(): void {
    // récuépérer l'id de l'annonce dans l'url
    // récupérer l'annonce via l'api
  }

  send(){

  }

}
