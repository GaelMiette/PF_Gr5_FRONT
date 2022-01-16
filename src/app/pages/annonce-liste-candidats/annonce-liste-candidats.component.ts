import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anounce } from 'src/app/shared/anounce';

@Component({
  selector: 'app-annonce-liste-candidats',
  templateUrl: './annonce-liste-candidats.component.html',
  styleUrls: ['./annonce-liste-candidats.component.css']
})
export class AnnonceListeCandidatsComponent implements OnInit {

  liste = [];
  annonce : Anounce;
  id:any;

  constructor(private http: HttpClient, private route : ActivatedRoute) { }

  async ngOnInit() {

    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });

    this.annonce=await this.http.get<Anounce>("http://localhost:8080/danavalley/api/annonces/"+this.id).toPromise()
    console.log(this.annonce)

  }

}
