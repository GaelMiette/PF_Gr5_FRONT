import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-espacecandidat',
  templateUrl: './espacecandidat.component.html',
  styleUrls: ['./espacecandidat.component.css']
})
export class EspacecandidatComponent implements OnInit {

  shouldShow = false;
  user = {

    nom: "sparrow", 
    prenom: "jack", 
    age: 35,
    mail: "blackpearl@bouh.fr",
    
    profession: "pirate",
    experience: 20,
    departement: "bouh",
  };
  message:string;

  constructor(private http:HttpClient , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user= JSON.parse(sessionStorage.getItem('user'));
    // récupérer le user depuis le session storage
    // le session storage est créé depuis le login
  }

  toggle_display(){
    if(this.shouldShow==true){
      this.display_form(false)
    }else{
      this.display_form(true)
    }
  }

  display_form(should){
    this.shouldShow = should
  }

  update(){
    this.http
    .put("http://localhost:8080/danavalley/api/candidats", 
      JSON.stringify(this.user),
      {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      })
      .subscribe(
        (response)=>{
          this.message = "Profil modifié"
        },
        (err)=>{
          this.message="no bueno"
        }

      )
  }

}
