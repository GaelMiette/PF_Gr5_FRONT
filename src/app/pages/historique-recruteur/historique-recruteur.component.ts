import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';
import { Recruiter } from 'src/app/shared/recruiter';

@Component({
  selector: 'app-historique-recruteur',
  templateUrl: './historique-recruteur.component.html',
  styleUrls: ['./historique-recruteur.component.css']
})
export class HistoriqueRecruteurComponent implements OnInit {

  liste = [];
  message:any;

  user :any;

  constructor( 
    private http: HttpClient , 
    private route:Router ,) { }

  ngOnInit(): void {
    this.user= sessionStorage.getItem("user");
    this.get_liste();
  }

  async get_liste(){
   let recr= await this.http.get<Recruiter>(sessionStorage.getItem("BASE_URL")+"/recruteurs/"+this.user.id)
    .toPromise();
    this.liste= recr.listeAnnonces;
  }

  go_update(id){
    this.route.navigate(['/ad/'+id]);
  }

  delete_annonce(id:number){
    this.http.delete(sessionStorage.getItem("BASE_URL")+"/annonces/"+id)
    .subscribe((response)=>{
      this.message="annonce supprimé";
    })
  }
   

}
