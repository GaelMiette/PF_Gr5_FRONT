import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anounce } from 'src/app/shared/anounce';

@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent implements OnInit {

  message;
  // user = JSON.parse(sessionStorage.getItem("user"))

  departements = JSON.parse(sessionStorage.getItem("departements"));
  
  user = {
    nom: "sparrow", 
    prenom: "jack", 
    entreprise: "entreprise 1664",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Logo_Bi%C3%A8re_1664_en_2021.png/180px-Logo_Bi%C3%A8re_1664_en_2021.png",
    departement: "bouh",
  }

  date = new Date();

  anounce :Anounce= new Anounce();

  constructor( private http : HttpClient , private route:ActivatedRoute) { }

  ngOnInit(): void {

    // user = sessionStorage.getItem("user");
    // récuépérer l'id de l'annonce dans l'url
    this.route.params.subscribe(params =>{
      this.anounce.id = params['id'];
    });
    
    this.http.get<Anounce>(sessionStorage.getItem("BASE_URL")+"/annonces/"+this.anounce.id)
    .subscribe(
    (response)=>{
      this.anounce=response;
      }
    )
  }
  

    


  update(){
    let tmp;
  this.http.get<Anounce>(sessionStorage.getItem("BASE_URL")+"/annonces/"+this.anounce.id)
  .subscribe(
    (response)=>{
      console.log(response.toString());
      tmp=response;

      if(tmp!=null){
        tmp=this.anounce;
        console.log("tmp prend la valeur de l'annonce modifiée");
      }else{
        this.message="annonce n'existe pas dans la db.";
        return tmp;
      }
      this.put_function(tmp);
      console.log("j'arrive au bout : "+tmp.titre +" "+tmp.categorie);
    }
  )
}

  put_function(tmp){
    this.http
    .put(
      sessionStorage.getItem('BASE_URL') + '/annonces',
      JSON.stringify(tmp),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    )
    .subscribe(
      (response) => {
        this.message = 'Annonce modifiée';
      },
      (err) => {
        this.message = 'no bueno la modificacion';
      }
    );
  }
}
