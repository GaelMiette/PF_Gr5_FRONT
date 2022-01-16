import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/shared/candidate';

@Component({
  selector: 'app-historique-candidat',
  templateUrl: './historique-candidat.component.html',
  styleUrls: ['./historique-candidat.component.css']
})
export class HistoriqueCandidatComponent implements OnInit {

  default_img_url = "https://th.bing.com/th/id/R.88f4f67fe36423a9f099e32757f61acc?rik=CLtRO2eGANx4Vw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_329115.png&ehk=mXoK%2be700RIpbejgADkfZYJSnzVqJhHHmQWdguPy40k%3d&risl=&pid=ImgRaw&r=0";
  user:Candidate = new Candidate();
  BASE_URL = "";

  constructor(private http:HttpClient) { }


  ngOnInit() {

    this.user = JSON.parse(sessionStorage.getItem("user"));

		this.BASE_URL = sessionStorage.getItem("BASE_URL");
    
  }

  async retCandidature(id:number) {

		let current = [...this.user.listeAnnonces];
		
		this.user.listeAnnonces.map((annonce, index) =>{
			if(annonce.id == id){
				current.splice(index, 1);
			}
		});

		this.user.listeAnnonces = current;

		let body = JSON.stringify(this.user);

		let headers = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

		await this.http.put(this.BASE_URL + "/candidats", body, headers).toPromise();

		this.user = await this.http.get<Candidate>(this.BASE_URL + "/candidats/" + this.user.id).toPromise();
		this.user.isRecruiter = false;
		
		sessionStorage.setItem("user", JSON.stringify(this.user));
		
		window.location.reload();
	}

}
