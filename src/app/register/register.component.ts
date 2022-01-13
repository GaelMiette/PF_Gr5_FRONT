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
  BASE_URL = "http://localhost:8080/danavalley/recruteur";
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

  // recruiter: any = {
  //   login:"",
  //   logo :"",
  //   mail: "",
  //   mdp: "",
  //   nom :"",
  //   prenom :"",
  //   nom_entreprise :"",
  //   departement:{},

  //   isRecruiter:true
  // }

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
   // document.getElementById("esp_rec").style.display='none';
    document.getElementById("form_rec").style.visibility='hidden';

    this.http.get(this.BASE_URL + "/departements").subscribe(
      response=>{
        this.departements = response;
      }
    )
  }

  toggle(){

    this.espace= !this.espace;
    if(this.espace===false){
    //document.getElementById("esp_can").style.display='none';
    //document.getElementById("esp_rec").style.display='block';
    document.getElementById("form_can").style.visibility='hidden';
    document.getElementById("form_rec").style.visibility='visible';
  } else{
    //document.getElementById("esp_can").style.display='block';
    //document.getElementById("esp_rec").style.display='none';
    document.getElementById("form_can").style.visibility='visible';
    document.getElementById("form_rec").style.visibility='hidden';
  }
}

  register(isRecruiter: boolean){

    let user = this.candidate;

    if(isRecruiter){
      user = this.recruiter;
    }

    user.departement_id = parseInt(user.departement_id)
    let departement = null;
    

    console.log(user);

    // vérification bdd
    let isRegistered: boolean = false;

    this.http.get<Recruiter>(this.BASE_URL + "/recruteurs/bymail/" + user.mail).subscribe(
      response=>{
        if(response != null){
          isRegistered = true
        }
      }
    )

    if(!isRegistered){
      this.http.post(
        this.BASE_URL + "/recruteurs",
        JSON.stringify(user),
        {headers: new HttpHeaders({"Content-Type": "application/json"})}

      ).subscribe()
    }

    
    // if(isRegistered){
    //   delete user.pwd;
    //   let toStore = JSON.stringify(user);
    //   sessionStorage.setItem("user", toStore);
    //   this.router.navigate(["/accueil"]);
    // }
  }

}
