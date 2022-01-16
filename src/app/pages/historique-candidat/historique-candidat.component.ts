import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique-candidat',
  templateUrl: './historique-candidat.component.html',
  styleUrls: ['./historique-candidat.component.css']
})
export class HistoriqueCandidatComponent implements OnInit {

  message;
  default_img_url = "https://th.bing.com/th/id/R.88f4f67fe36423a9f099e32757f61acc?rik=CLtRO2eGANx4Vw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_329115.png&ehk=mXoK%2be700RIpbejgADkfZYJSnzVqJhHHmQWdguPy40k%3d&risl=&pid=ImgRaw&r=0"
  liste;
  user;


  constructor(private http:HttpClient) { }


  async ngOnInit() {
    this.user= JSON.parse(sessionStorage.getItem("user"));
    console.log(this.user);
    
  }

  retirer(){

  }

}
