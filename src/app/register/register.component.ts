import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private http:HttpClient) { }

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

  find_departement(id){
    // On récupère depuis le formulaire l'id d'un département.
    // Pour l'enregistrement en db, on a besoin du département complet.
    // Cette fonction récupère le département correspondant à l'id du formulaire.
    let departement = null;
    
    this.departements.map(dept => {
      if(dept.id == id){
        departement = dept;
      }
    });

    return departement;

  }

  async send_to_db(endpoint, user){
    
    let headers = {headers: new HttpHeaders({"Content-Type": "application/json"})}
    let body = JSON.stringify(user);
    console.log("sendtodb : ", body);
    // création d'un nouveau user (candidat ou recruteur) en db et auto-login
    await this.http.post(this.BASE_URL + endpoint, body, headers).toPromise();
    
    let toStore = body;
    sessionStorage.setItem("user", toStore);
    
    alert("profil crée !");
  }

  async register(isRecruiter: boolean){

    console.log("début")

    let users = {

      recruiter: {
        data: this.recruiter,
        func: (input) => this.http.get<Recruiter>(this.BASE_URL + input.endpoint_exists + input.data.mail),
        endpoint_exists: "/recruteursmail/",
        endpoint_post: "/recruteurs",
      },

      candidate: {
        data: this.candidate,
        func: (input) => this.http.get<Candidate>(this.BASE_URL + input.endpoint_exists + input.data.mail),
        endpoint_exists: "/candidatsmail/",
        endpoint_post: "/candidats",
      }

    }

    let key  = isRecruiter ? "recruiter" : "candidate";
    let user = users[key];

    user.data.departement = this.find_departement(user.data.departement_id);

    console.log("user to store : ", user)
    
    let registered = await user.func(user).toPromise();
    console.log(registered) 

    if(registered == undefined){
      console.log("n'existe pas")
      // si la réponse vaut null, c'est qu'aucun recruteur avec ce mail n'existe, on le créé
      await this.send_to_db(user.endpoint_post, user.data);
      
    }else{
      alert("existe déjà");
      return ;
    }
    console.log("fin")
    window.location.reload();
  }

}