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

  async register(isRecruiter: boolean){

    console.log("début")

    let headers = {headers: new HttpHeaders({"Content-Type": "application/json"})}
    
    let dico = {

      recruiter: {
        user: this.recruiter,
        func: (data) => this.http.get<Recruiter>(this.BASE_URL + data.endpoint_by_mail + data.user.mail),
        endpoint_by_mail: "/recruteursmail/",
        endpoint: "/recruteurs",
      },

      candidate: {
        user: this.candidate,
        func: (data) => this.http.get<Candidate>(this.BASE_URL + data.endpoint_by_mail + data.user.mail),
        endpoint_by_mail: "/candidatsmail/",
        endpoint: "/candidats",
      }

    }

    let key  = isRecruiter ? "recruiter" : "candidate";
    let data = dico[key];

    data.user.departement = this.find_departement(data.user.departement_id);

    console.log("user to store : ", data.user)
    
    let registered = await data.func(data).toPromise();
    console.log(registered) 

    if(registered != undefined){
      alert("cet utilisateur existe déjà");
      return;
    }

    let body = JSON.stringify(data.user);
    await this.http.post(this.BASE_URL + data.endpoint, body, headers).toPromise();
    
    data.user = await this.http.get(this.BASE_URL + data.endpoint_by_mail + data.user.mail).toPromise();
    data.user.isRecruiter = isRecruiter;

    let toStore = JSON.stringify(data.user);
    sessionStorage.setItem("user", toStore);

    alert("profil crée !");
    window.location.reload();
  }

}