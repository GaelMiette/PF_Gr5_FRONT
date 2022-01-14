import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../shared/candidate';
import { Recruiter } from '../shared/recruiter';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  espace : boolean=true;

  BASE_URL = null;

  recruiter = new Recruiter();
  candidate= new Candidate();
  departements: any;

  constructor(private router:Router, private http:HttpClient) { }


  ngOnInit(): void {
   // document.getElementById("esp_rec").style.display='none';
    document.getElementById("form_rec").style.visibility='hidden';

    
    this.BASE_URL = sessionStorage.getItem("BASE_URL");
    // récupération de la liste des départements dispo
    // dynamiser les boutons radio du html avec ?
    this.departements = JSON.parse(sessionStorage.getItem("departements"));    
  }

  toggle(){

    this.espace = !this.espace;
    if(this.espace===false){
    document.getElementById("form_can").style.visibility='hidden';
    document.getElementById("form_rec").style.visibility='visible';

  } else{
    document.getElementById("form_can").style.visibility='visible';
    document.getElementById("form_rec").style.visibility='hidden';

  }
}

  find_departement(user:any){
    // On récupère depuis le formulaire l'id d'un département.
    // Pour l'enregistrement en db, on a besoin du département complet.
    // Cette fonction assigne au user le département correspondant à l'id du formulaire.
    let departement = null;
    
    this.departements.map(dept => {
      if(dept.id == user.departement_id){
        departement = dept;
      }
    });
    
    user.departement = departement;

    return user;

  }

  send_to_db(endpoint, user){
    console.log("sendtodb : ", JSON.stringify(user));
    // création d'un nouveau user (candidat ou recruteur) en db et auto-login
    this.http.post(

      this.BASE_URL + endpoint,
      JSON.stringify(user),
      {headers: new HttpHeaders({"Content-Type": "application/json"})}

    ).subscribe(

      response =>{
        let toStore = JSON.stringify(user);
        sessionStorage.setItem("user", toStore);
        window.location.reload();
        alert("profil crée !")
      },

      error =>{
        alert("erreur pendant l'enregistrement de l'utilisateur")
      }
      
    )
    window.location.reload();
  }

  register(isRecruiter: boolean){

    let users = {

      "recruiter": {
        data: this.recruiter,
        func: (input) => this.http.get<Recruiter>(this.BASE_URL + input.endpoint_exists + input.data.mail),
        endpoint_exists: "/recruteursmail/",
        endpoint_post: "/recruteurs",
        isRecruiter: true
      },

      "candidate": {
        data: this.candidate,
        func: (input) => this.http.get<Candidate>(this.BASE_URL + input.endpoint_exists + input.data.mail),
        endpoint_exists: "/candidatsmail/",
        endpoint_post: "/candidats",
        isRecruiter: false
      }

    }

    let key  = isRecruiter ? "recruiter" : "candidate";
    let user = users[key];

    user.data = this.find_departement(user.data);
    user.data.isRecruiter = user.isRecruiter;

    console.log("user to store : ", user)

    user.func(user).subscribe(
      
      response => {
        
        if(response == null || response.length == 0){
          // si la réponse vaut null, c'est qu'aucun recruteur avec ce mail n'existe, on le créé
          this.send_to_db(user.endpoint_post, user.data);
          console.log("n'existe pas")
        }else{
          console.log("existe déjà")
        }

      },

      error =>{
        alert("erreur")
        console.log("erreur pendant la vérification de l'existance de l'utilisateur : ", error)
      }

    )
    
  }

}

