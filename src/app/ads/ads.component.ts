import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  

  Mylist : any;
  date : string;
  constructor() { }

  ngOnInit(): void {

    this.date = new Date(Date.now()).toDateString();

    this.Mylist=[{
      titre: "Location de menhirs",
      description: "Je souhaite trouver quelqu'un pour louer mon menhir.",
      categorie:"petits services",
      date: "12.01.2022",
      salaire : "300€",
      type_contrat : "ponctuel",
      dept : {
        id : 22,
        name : "Côtes d'Armor"
      },
      recruteur: {
        name: "Obelix"
      }
    }]
  }

}
