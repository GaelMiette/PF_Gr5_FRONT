import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  user: any = null;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.user)
  }

  

}
