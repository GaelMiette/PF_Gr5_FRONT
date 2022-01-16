import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recruiter } from 'src/app/shared/recruiter';

@Component({
  selector: 'app-form-annonce',
  templateUrl: './form-annonce.component.html',
  styleUrls: ['./form-annonce.component.css']
})
export class FormAnnonceComponent implements OnInit {

  date = new Date();

  user = JSON.parse(sessionStorage.getItem("user"));
  message : String;
  departements = JSON.parse(sessionStorage.getItem("departements"));
  BASE_URL = sessionStorage.getItem("BASE_URL");

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

  constructor(private http: HttpClient, private route : Router) { }

  ngOnInit(): void {
  }

  send(){
    this.anounce.departement= this.find_departement(this.anounce.departement);
    
    delete this.anounce.recruteur.listeAnnonces;
    const body = JSON.stringify(this.anounce);

    this.http.post(sessionStorage.getItem("BASE_URL")+"/annonces", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).
      subscribe(async response => {
        console.log("crud service post OK");
        let toStore= await this.http.get(sessionStorage.getItem("BASE_URL")+"/recruteurs/"+this.user.id).toPromise();
        sessionStorage.setItem("user", JSON.stringify(toStore));
        alert("Annonce créée.");
        this.route.navigate(['/historique_recruteur']);
      },
        err => {
          console.log("crud service post KO")
        });

      
  }


  find_departement(id){
    let departement = null;
    
    this.departements.map(dept => {
      if(dept.id == id){
        departement = dept;
      }
    });

    return departement;

  }
}
