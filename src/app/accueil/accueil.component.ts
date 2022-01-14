import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  BASE_URL = "http://localhost:8080/danavalley/api";
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    sessionStorage.setItem("BASE_URL", this.BASE_URL);

    this.http.get(this.BASE_URL + "/departements").subscribe(
      response=>{
        let toStore = JSON.stringify(response);
        sessionStorage.setItem("departements", toStore);
      }
    )
  }

}
