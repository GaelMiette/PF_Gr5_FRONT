import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  

  Mylist : any;
  date : string;
  constructor(private http : HttpClient, private route : Router) { }

  ngOnInit(): void {

    this.date = new Date(Date.now()).toDateString();

    this.init();

  }

  init(){
    this.http.get("http://localhost:8080/danavalley/api/annonces").subscribe(
      response => {
        this.Mylist = response;
      },
      err=>{
        console.log("**********KO")
      }
    )
  }

  seeDescription(id){
    this.route.navigate(['/ad/'+id]);
  }

}
