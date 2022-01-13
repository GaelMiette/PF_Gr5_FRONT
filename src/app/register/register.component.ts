import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  espace : boolean=true;
  message;

  candidate: any = {
    name : "",
    surname : "",
    profession:"",
    exp:0,
    age:0,
    dept:22,
    mail: "", 
    pwd: "", 
    isRecruiter:false}

  recruiter: any = {
    entreprise :"",
    mail: "", 
    pwd: "", 
    logo :"",
    name :"",
    surname :"",
    login:"",
    dept:0,

    isRecruiter:true}

  constructor(private router:Router , private http : HttpClient) { }

  ngOnInit(): void {
   // document.getElementById("esp_rec").style.display='none';
    document.getElementById("form_rec").style.visibility='hidden';
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


register_candidate(){

  const body = JSON.stringify(this.candidate);

    this.http.post("http://localhost:8080/danavalley/api/candidats", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).
      subscribe(response => {
        console.log("crud service post OK");
        this.message="article créé"
      },
        err => {
          console.log("crud service post KO")
          this.message="erreur article"
        });
}


  register(isRecruiter: boolean){

    let user = this.candidate;

    if(isRecruiter){
      user = this.recruiter;
    }

    // vérification bdd
    let isRegistered: boolean = true;
    
    if(isRegistered){
      delete user.pwd;
      let toStore = JSON.stringify(user);
      sessionStorage.setItem("user", toStore);
      this.router.navigate(["/accueil"]);
    }
  }

}
