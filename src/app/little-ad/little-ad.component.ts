import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anounce } from '../shared/anounce';
import { Candidate } from '../shared/candidate';

@Component({
  selector: 'app-little-ad',
  templateUrl: './little-ad.component.html',
  styleUrls: ['./little-ad.component.css']
})
export class LittleAdComponent implements OnInit {

  annonce : Anounce = new Anounce();
  id : any;
  user:Candidate = new Candidate();
  isCandidat: boolean = false;
  constructor(private http : HttpClient, private route : ActivatedRoute , private router : Router) { }
  departements = JSON.parse(sessionStorage.getItem("departements"));
  
  async ngOnInit() {
    
    this.user=JSON.parse(sessionStorage.getItem("user"));
    console.log(this.user);
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });

    this.annonce=await this.http.get<Anounce>("http://localhost:8080/danavalley/api/annonces/"+this.id).toPromise()
    console.log(this.annonce)

    this.checkPostule();
    console.log(this.isCandidat)
  }

  checkPostule(){
    for (let candidat of this.annonce.listeCandidats){
      if(candidat.id==this.user.id){
        this.isCandidat=true;
        break;
      }
      else
        this.isCandidat=false
    }
  }

  async candidater(){
    this.user.listeAnnonces.push(this.annonce);
    const body = JSON.stringify(this.user);
    // this.http.put(sessionStorage.getItem("BASE_URL")+"/candidats", body, {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json"
    //   })
    // }).
      // subscribe(async response => {

      //   console.log("crud service post OK");
      //   //recharge le user

      //   let toStore = await this.http.get(sessionStorage.getItem("BASE_URL")+"/candidats/"+this.user.id);
      //   sessionStorage.setItem("user", JSON.stringify(toStore));
      //   this.user.isRecruter = false;
      //   window.location.reload();
      // },
      // err => {
      //   console.log("crud service post KO")
      // });

     await this.http.put(sessionStorage.getItem("BASE_URL")+"/candidats", body, {
          headers: new HttpHeaders({
            "Content-Type": "application/json"
          })
        }).toPromise();
        
      this.user = await this.http.get<Candidate>(sessionStorage.getItem("BASE_URL")+"/candidats/"+this.user.id
      ).toPromise();
      this.user.isRecruiter = false;
      console.log(this.user);
      sessionStorage.setItem("user", JSON.stringify(this.user));

  }

  

  retCandidature(){

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
