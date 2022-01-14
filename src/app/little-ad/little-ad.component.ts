import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-little-ad',
  templateUrl: './little-ad.component.html',
  styleUrls: ['./little-ad.component.css']
})
export class LittleAdComponent implements OnInit {

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
