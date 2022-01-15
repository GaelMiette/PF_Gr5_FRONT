import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-annonce',
  templateUrl: './form-annonce.component.html',
  styleUrls: ['./form-annonce.component.css']
})
export class FormAnnonceComponent implements OnInit {

  // user = JSON.parse(sessionStorage.getItem("user"))
  
  
  // user = {
  //   nom: "sparrow", 
  //   prenom: "jack", 
  //   entreprise: "entreprise 1664",
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Logo_Bi%C3%A8re_1664_en_2021.png/180px-Logo_Bi%C3%A8re_1664_en_2021.png",
  //   departement: "bouh",
  // }

  // date = new Date();

  // anounce = {
  //   titre: "",
  //   description: "",
  //   categorie: "",
  //   date: this.date.getDate() + "/" + this.date.getMonth()+1 + "/" + this.date.getFullYear(),
  //   salaire: 0,
  //   type_contrat: "",
  //   teletravail: false,
  //   recruteur: this.user,
  // }

  // constructor() { }

  // ngOnInit(): void {
  // }

  // send(){
  //   // post http
  // }

  date = new Date();

  user = JSON.parse(sessionStorage.getItem("user"));
  message : String;
  departements = JSON.parse(sessionStorage.getItem("departements"));

  anounce = {
    titre: "",
    description: "",
    categorie: "",
    date: this.date.getDate() + "/" + this.date.getMonth()+1 + "/" + this.date.getFullYear(),
    salaire: 0,
    type_Contrat: "",
    tele_travail: false,
    listeCandidats: [],
    recruteur: this.user,
    departement : null,
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  send(){
    // post http
    const body = JSON.stringify(this.anounce);
    alert(body);

    this.http.post(sessionStorage.getItem("BASE_URL")+"/annonces", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).
      subscribe(response => {

        console.log("crud service post OK");
        this.message="annonce créé"

      },

        err => {
          console.log("crud service post KO")
          this.message="erreur annonce"
        });
      }

  

}
