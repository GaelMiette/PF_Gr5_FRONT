import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-little-ad',
  templateUrl: './little-ad.component.html',
  styleUrls: ['./little-ad.component.css']
})
export class LittleAdComponent implements OnInit {

  // annonce : any;
  // constructor() { }

  // ngOnInit(): void {
  //   this.annonce={
  //     titre: "Location de menhirs",
  //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     categorie:"petits services",
  //     date: "12.01.2022",
  //     salaire : "300€",
  //     type_contrat : "ponctuel",
  //     dept : {
  //       id : 22,
  //       name : "Côtes d'Armor"
  //     },
  //     recruteur : {
  //       name : "Obelix"
  //     }
  //   }
  // }


  annonce : any;
  id : any;
  constructor(private http : HttpClient, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });

    this.http.get("http://localhost:8080/danavalley/api/annonces/"+this.id).subscribe(
      response =>{
        this.annonce = response;
      }
    )
  }

  candidater(){
    
  }


}
