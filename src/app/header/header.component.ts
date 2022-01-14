import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  BASE_URL = "http://localhost:8080/danavalley/api";

  constructor(private route: Router, private http:HttpClient) { }

  user = null

  ngOnInit(): void {
    
    this.user = JSON.parse(sessionStorage.getItem("user"));

    sessionStorage.setItem("BASE_URL", this.BASE_URL);

    this.http.get(this.BASE_URL + "/departements").subscribe(
      response=>{
        let toStore = JSON.stringify(response);
        // console.log(response)
        sessionStorage.setItem("departements", toStore);
      }
    )
  }

  logout(){
    this.user = null;
    sessionStorage.setItem("user", null);
    this.route.navigate(["/home"]);
  }

}
