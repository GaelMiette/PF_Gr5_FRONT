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
  message;

  user ={
    id:1,
    age:25,
    nom:"trucmuche",
    prenom:"toto",
    departement_id:22,
    anneesxp:0,
    mail: "aze@aze",
    mdp : "zer",
    profession:"developpeur",
    version:2,
  }


  constructor(private http:HttpClient , private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.user = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.user);
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


put_function(tmp){
  this.http
  .put(
    sessionStorage.getItem('BASE_URL') + '/candidats',
    JSON.stringify(tmp),
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
  )
  .subscribe(
    (response) => {
      this.message = 'Profil modifié';
      sessionStorage.setItem("user", tmp);
    },
    (err) => {
      this.message = 'no bueno la modificacion';
    }
  );
}

update(){
  let tmp;
  this.http.get(sessionStorage.getItem("BASE_URL")+"/candidatsmail/"+this.user.mail)
  .subscribe(
    (response)=>{
      console.log(response.toString())
      if(response!=null)
      tmp=response;

      if(tmp!=null){
        tmp=this.user;
        console.log("tmp prend la valeur du user");
      }else{
        this.message="user n'existe pas dans la db.";
        return tmp;
      }
      this.put_function(tmp);
      console.log("j'arrive au bout : "+tmp.nom +" "+tmp.prenom);
      sessionStorage.setItem("user",tmp);
    }
  )
        
  }
}