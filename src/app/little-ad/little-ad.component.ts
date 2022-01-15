import { HttpClient } from '@angular/common/http';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-little-ad',
  templateUrl: './little-ad.component.html',
  styleUrls: ['./little-ad.component.css']
})
export class LittleAdComponent implements OnInit {

  annonce : any;
  id : any;
  user:any;
  constructor(private http : HttpClient, private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {

    this.user=sessionStorage.getItem("user");
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

  modifier(){
    this.router.navigate(['/upd_ad/'+this.id]);
  }

  supprimer(){
    this.http.delete(sessionStorage.getItem("BASE_URL")+"/annonces/"+this.id)
    .subscribe((response)=>{
      alert(response);
      this.router.navigate(['/espc']);
    })

  }


}
