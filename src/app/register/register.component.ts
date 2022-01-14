import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  departements: any;


  candidate: any = {
    name : "",
    surname : "",
    profession:"",
    exp:0,
    age:0,
    dept:22,
    mail: "", 
    pwd: "", 
    isRecruiter:false
  }

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
        alert("erreur")
      }
      
    )
    window.location.reload();
  }

  // pour toi gael !
  registerCandidate(){

  }

  registerRecruiter(){
    
    let user = this.find_departement(this.recruiter);
    user.isRecruiter = true;
    // user.id = 1;

    // vérification bdd si le mail existe déjà
    this.http.get<Recruiter>(this.BASE_URL + "/recruteursmail/" + user.mail).subscribe(
      
      async response => {
        if(response == null){
          // si la réponse vaut null, c'est qu'aucun recruteur avec ce mail n'existe, on le créé
          this.send_to_db("/recruteurs", user);
        }
      }

    )
  }

  register(isRecruiter: boolean){

    isRecruiter ? this.registerRecruiter() : this.registerCandidate();
  }

}
