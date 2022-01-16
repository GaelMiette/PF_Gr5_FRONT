import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/shared/candidate';

@Component({
	selector: 'app-espacecandidat',
	templateUrl: './espacecandidat.component.html',
	styleUrls: ['./espacecandidat.component.css']
})
export class EspacecandidatComponent implements OnInit {

	shouldShow = false;
	message;
	user: Candidate = new Candidate();
	BASE_URL = null;
	departements = [];

	constructor(private http: HttpClient, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.user = JSON.parse(sessionStorage.getItem("user"));
		this.BASE_URL = sessionStorage.getItem("BASE_URL");
		this.departements = JSON.parse(sessionStorage.getItem("departements"));
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

	async update() {

		this.shouldShow = false;
		this.user.departement = this.find_departement(this.user.departement_id);
		let body = JSON.stringify(this.user);
		let headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
		
		await this.http.put(this.BASE_URL + "/candidats", body, headers).toPromise();

		this.user = await this.http.get<Candidate>(this.BASE_URL + "/candidats/"+ this.user.id).toPromise();
		this.user.isRecruiter = false;
		body = JSON.stringify(this.user);
		sessionStorage.setItem("user", body);
		alert("modification enregistéres");
	}
}
