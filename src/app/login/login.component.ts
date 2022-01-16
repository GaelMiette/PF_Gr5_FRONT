import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recruiter } from '../shared/recruiter';
import { Candidate } from '../shared/candidate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  BASE_URL = "";
  candidate: any = {mail: "", mdp: ""}
  recruiter: any = {mail: "", mdp: ""}

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.BASE_URL = sessionStorage.getItem("BASE_URL");
  }

  async login(isRecruiter: boolean){

    let bouh = {

      recruiter: {
        user: this.recruiter,
        func: (mail) => this.http.get<Recruiter>(this.BASE_URL + "/recruteursmail/" + mail).toPromise(),
      },

      candidate:{
        user: this.candidate,
        func: (mail) => this.http.get<Candidate>(this.BASE_URL + "/candidatsmail/" + mail).toPromise()
      }

    }

    let key = isRecruiter ? "recruiter" : "candidate";
    let data = bouh[key];
    let registered = await data.func(data.user.mail);

    console.log(registered)

    if(registered == undefined){
      alert("cet utilisateur n'existe pas");
      return ;
    }
        
    if(registered.mdp != data.user.mdp){
      alert("mauvais mot de passe");
      return ;
    }

    console.log("success");

    registered.isRecruiter = isRecruiter;
    let toStore = JSON.stringify(registered);
    sessionStorage.setItem("user", toStore);

    window.location.reload();
  }

}