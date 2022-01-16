import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Recruiter} from "../../shared/recruiter"

@Component({
  selector: 'app-espacerecruteur',
  templateUrl: './espacerecruteur.component.html',
  styleUrls: ['./espacerecruteur.component.css']
})
export class EspacerecruteurComponent implements OnInit {

  default_img_url = "https://th.bing.com/th/id/R.88f4f67fe36423a9f099e32757f61acc?rik=CLtRO2eGANx4Vw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_329115.png&ehk=mXoK%2be700RIpbejgADkfZYJSnzVqJhHHmQWdguPy40k%3d&risl=&pid=ImgRaw&r=0"
  shouldShow = false;
  user = null;
  BASE_URL = null;
  // liste de tous les departements dispos
  departements = null;
  // département renseigné dans le formulaire
  departement = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.user)
    this.departements = JSON.parse(sessionStorage.getItem("departements"));
    this.BASE_URL = sessionStorage.getItem("BASE_URL");
  }

  toggle_display() {
		this.shouldShow = !this.shouldShow;
	}

  find_departement(id){
    // On récupère depuis le formulaire l'id d'un département.
    // Pour l'enregistrement en db, on a besoin du département complet.
    // Cette fonction récupère le département correspondant à l'id du formulaire.
    let departement = null;
    
    this.departements.map(dept => {
      if(dept.id == id){
        departement = dept;
      }
    });

    return departement;

  }

  async valider(){
    
    this.shouldShow = false;

    let headers = {headers: new HttpHeaders({"Content-Type": "application/json"})}
    this.user.departement = this.find_departement(this.user.departement_id);
    let body = JSON.stringify(this.user);

    await this.http.put(this.BASE_URL + "/recruteurs", body, headers).toPromise();
    this.user = await this.http.get<Recruiter>(this.BASE_URL + "/recruteurs/" + this.user.id).toPromise();
    this.user.isRecruiter = true;
    body = JSON.stringify(this.user);
    sessionStorage.setItem("user", body);
    
  }

}
