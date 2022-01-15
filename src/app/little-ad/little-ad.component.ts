import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anounce } from '../shared/anounce';

@Component({
  selector: 'app-little-ad',
  templateUrl: './little-ad.component.html',
  styleUrls: ['./little-ad.component.css']
})
export class LittleAdComponent implements OnInit {

  annonce : Anounce = new Anounce();
  id : any;
  user:any;
  constructor(private http : HttpClient, private route : ActivatedRoute , private router : Router) { }
  departements = JSON.parse(sessionStorage.getItem("departements"));
  
  async ngOnInit() {
    this.user=JSON.parse(sessionStorage.getItem("user"));
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });

    this.annonce=await this.http.get<Anounce>("http://localhost:8080/danavalley/api/annonces/"+this.id).toPromise()
    console.log(this.annonce)
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

  find_departement(id){
    let departement = null;
    
    this.departements.map(dept => {
      if(dept.id == id){
        departement = dept;
      }
    });

    return departement;

  }

  


}
