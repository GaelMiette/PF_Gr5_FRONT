import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recruiter } from 'src/app/shared/recruiter';

@Component({
  selector: 'app-historique-recruteur',
  templateUrl: './historique-recruteur.component.html',
  styleUrls: ['./historique-recruteur.component.css']
})
export class HistoriqueRecruteurComponent implements OnInit {

  liste = [];
  message:any;
  default_img_url = "https://th.bing.com/th/id/R.88f4f67fe36423a9f099e32757f61acc?rik=CLtRO2eGANx4Vw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_329115.png&ehk=mXoK%2be700RIpbejgADkfZYJSnzVqJhHHmQWdguPy40k%3d&risl=&pid=ImgRaw&r=0"
  user :any;
  BASE_URL = "";

  constructor( private http: HttpClient , private route:Router ) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.user);
    console.log(this.user.listeAnnonces);
    this.BASE_URL = sessionStorage.getItem("BASE_URL");
  }

  go_to_details(id:number){
    
    this.route.navigate(['/ad/'+id]);
  }

  go_to_liste_candidats(id:number){
    this.route.navigate(['/listeCandidats/'+id])
  }

  go_update(id){

    this.route.navigate(['/upd_ad/'+id]);
  }

  async delete_annonce(id:number){
    await this.http.delete(this.BASE_URL+"/annonces/"+id).toPromise();
    this.user = await this.http.get<Recruiter>(this.BASE_URL+"/recruteurs/"+this.user.id).toPromise();
    this.user.isRecruiter=true;
    sessionStorage.setItem("user", JSON.stringify(this.user));
    alert("annonce supprimée");
  }
   

}
